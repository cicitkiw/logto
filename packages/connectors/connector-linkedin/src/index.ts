import { conditional } from '@silverhand/essentials';

import {
  ConnectorError,
  ConnectorErrorCodes,
  validateConfig,
  ConnectorType,
  jsonGuard,
} from '@logto/connector-kit';
import type {
  GetAuthorizationUri,
  GetUserInfo,
  SocialConnector,
  CreateConnector,
  GetConnectorConfig,
} from '@logto/connector-kit';
import ky, { HTTPError } from 'ky';

import {
  authorizationEndpoint,
  accessTokenEndpoint,
  defaultMetadata,
  defaultTimeout,
  defaultScope,
  userInfoEndpoint,
} from './constant.js';
import type { LinkedInConfig } from './types.js';
import {
  linkedInConfigGuard,
  userInfoResponseGuard,
  authResponseGuard,
  accessTokenResponseGuard,
} from './types.js';

const getAuthorizationUri =
  (getConfig: GetConnectorConfig): GetAuthorizationUri =>
  async ({ state, redirectUri }, setSession) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, linkedInConfigGuard);

    await setSession({ redirectUri });

    const queryParams = new URLSearchParams({
      response_type: 'code',
      client_id: config.clientId,
      redirect_uri: redirectUri,
      scope: config.scope ?? defaultScope,
      state,
    });

    return `${authorizationEndpoint}?${queryParams.toString()}`;
  };

export const getAccessToken = async (config: LinkedInConfig, code: string, redirectUri: string) => {
  const response = await ky
    .post(accessTokenEndpoint, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: config.clientId,
        client_secret: config.clientSecret,
      }).toString(),
      timeout: defaultTimeout,
    })
    .json();

  return accessTokenResponseGuard.parse(response);
};

const getUserInfo =
  (getConfig: GetConnectorConfig): GetUserInfo =>
  async (data, getSession) => {
    const config = await getConfig(defaultMetadata.id);
    validateConfig(config, linkedInConfigGuard);

    const authResponseResult = authResponseGuard.safeParse(data);

    if (!authResponseResult.success) {
      throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(data));
    }

    const { code } = authResponseResult.data;
    const { redirectUri } = await getSession();

    if (!redirectUri) {
      throw new ConnectorError(ConnectorErrorCodes.General, {
        message: 'Cannot find `redirectUri` from connector session.',
      });
    }

    try {
      const { access_token } = await getAccessToken(config, code, redirectUri);

      const userInfo = await ky
        .get(userInfoEndpoint, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
          timeout: defaultTimeout,
        })
        .json();
      const userInfoResult = userInfoResponseGuard.safeParse(userInfo);

      if (!userInfoResult.success) {
        throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, userInfoResult.error);
      }

      const { sub, name, email, picture } = userInfoResult.data;

      return {
        id: sub,
        name: conditional(name),
        email: conditional(email),
        picture: conditional(picture),
        rawData: jsonGuard.parse(userInfo),
      };
    } catch (error: unknown) {
      if (error instanceof HTTPError) {
        const { status, body: rawBody } = error.response;

        if (status === 401) {
          throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);
        }

        throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));
      }

      throw error;
    }
  };

const createLinkedInConnector: CreateConnector<SocialConnector> = async ({ getConfig }) => {
  return {
    metadata: defaultMetadata,
    type: ConnectorType.Social,
    configGuard: linkedInConfigGuard,
    getAuthorizationUri: getAuthorizationUri(getConfig),
    getUserInfo: getUserInfo(getConfig),
  };
};

export default createLinkedInConnector;
