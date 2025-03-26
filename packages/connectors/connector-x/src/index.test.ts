import nock from 'nock';

import { accessTokenEndpoint, authorizationEndpoint, userInfoEndpoint } from './constant.js';
import createConnector, { getAccessToken } from './index.js';
import { mockedConfig } from './mock.js';

const getConfig = vi.fn().mockResolvedValue(mockedConfig);
const setSession = vi.fn();
const getSession = vi.fn().mockResolvedValue({
  codeVerifier: 'codeVerifier',
});

vi.mock('./utils.js', () => ({
  generateCodeVerifier: vi.fn().mockReturnValue('codeVerifier'),
  generateCodeChallenge: vi.fn().mockReturnValue('codeChallenge'),
}));

describe('getAuthorizationUri', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should get a valid uri by redirectUri and state', async () => {
    const connector = await createConnector({ getConfig });
    const authorizationUri = await connector.getAuthorizationUri(
      {
        state: 'some_state',
        redirectUri: 'http://localhost:3000/callback',
        connectorId: 'some_connector_id',
        connectorFactoryId: 'some_connector_factory_id',
        jti: 'some_jti',
        headers: {},
      },
      setSession
    );
    expect(setSession).toHaveBeenCalledWith({
      codeVerifier: 'codeVerifier',
    });
    expect(authorizationUri).toEqual(
      `${authorizationEndpoint}?response_type=code&client_id=%3Cclient-id%3E&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=tweet.read+users.read&state=some_state&code_challenge=codeChallenge&code_challenge_method=S256`
    );
  });
});

describe('getAccessToken', () => {
  afterEach(() => {
    nock.cleanAll();
    vi.clearAllMocks();
  });

  it('should get an accessToken by exchanging with code', async () => {
    nock(accessTokenEndpoint).post('').reply(200, {
      access_token: 'access_token',
      scope: 'scope',
      token_type: 'token_type',
      expires_in: 3600,
    });
    const { access_token } = await getAccessToken(
      mockedConfig,
      'code',
      'codeVerifier',
      'redirectUri'
    );
    expect(access_token).toEqual('access_token');
  });
});

describe('getUserInfo', () => {
  beforeEach(() => {
    nock(accessTokenEndpoint).post('').query(true).reply(200, {
      access_token: 'access_token',
      scope: 'scope',
      token_type: 'token_type',
      expires_in: 3600,
    });
  });

  afterEach(() => {
    nock.cleanAll();
    vi.clearAllMocks();
  });

  it('should get valid SocialUserInfo', async () => {
    nock(userInfoEndpoint)
      .get('')
      .reply(200, {
        data: {
          id: '1',
          name: 'monalisa',
        },
      });
    const connector = await createConnector({ getConfig });
    const socialUserInfo = await connector.getUserInfo(
      { code: 'code', redirectUri: 'http://localhost:3000/callback' },
      getSession
    );
    expect(socialUserInfo).toStrictEqual({
      id: '1',
      name: 'monalisa',
      rawData: {
        data: {
          id: '1',
          name: 'monalisa',
        },
      },
    });
  });

  it('throws unrecognized error', async () => {
    nock(userInfoEndpoint).get('').reply(500);
    const connector = await createConnector({ getConfig });
    await expect(connector.getUserInfo({ code: 'code' }, vi.fn())).rejects.toThrow();
  });
});
