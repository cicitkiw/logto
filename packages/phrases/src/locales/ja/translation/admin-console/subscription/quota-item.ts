const quota_item = {
  tenant_limit: {
    name: 'テナント',
    limited: '{{count, number}} テナント',
    limited_other: '{{count, number}} テナント',
    unlimited: '無制限のテナント',
    not_eligible: 'テナントを削除してください',
  },
  mau_limit: {
    name: '月間アクティブユーザー数',
    limited: '{{count, number}} MAU',
    unlimited: '無制限のMAU',
    not_eligible: '全てのユーザーを削除してください',
  },
  token_limit: {
    name: 'トークン',
    limited: '{{count, number}} トークン',
    limited_other: '{{count, number}} トークン',
    unlimited: '無制限のトークン',
    not_eligible: '新しいトークンを防ぐためにすべてのユーザーを削除してください',
  },
  applications_limit: {
    name: 'アプリケーション',
    limited: '{{count, number}} アプリケーション',
    limited_other: '{{count, number}} アプリケーション',
    unlimited: '無制限のアプリケーション',
    not_eligible: 'アプリケーションを削除してください',
  },
  machine_to_machine_limit: {
    name: 'マシン間アプリケーション',
    limited: '{{count, number}} マシン間アプリケーション',
    limited_other: '{{count, number}} マシン間アプリケーション',
    unlimited: '無制限のマシン間アプリケーション',
    not_eligible: 'マシン間アプリケーションを削除してください',
  },
  third_party_applications_limit: {
    name: 'サードパーティーアプリ',
    limited: '{{count, number}} サードパーティーアプリ',
    limited_other: '{{count, number}} サードパーティーアプリ',
    unlimited: '無制限のサードパーティーアプリ',
    not_eligible: 'サードパーティーアプリを削除してください',
  },
  resources_limit: {
    name: 'APIリソース',
    limited: '{{count, number}} APIリソース',
    limited_other: '{{count, number}} APIリソース',
    unlimited: '無制限のAPIリソース',
    not_eligible: 'APIリソースを削除してください',
  },
  scopes_per_resource_limit: {
    name: 'リソースごとのスコープ',
    limited: '{{count, number}} リソースごとのスコープ',
    limited_other: '{{count, number}} リソースごとのスコープ',
    unlimited: '無制限のリソースごとのスコープ',
    not_eligible: 'リソースごとのスコープを削除してください',
  },
  custom_domain_enabled: {
    name: 'カスタムドメイン',
    limited: 'カスタムドメイン',
    unlimited: 'カスタムドメイン',
    not_eligible: 'カスタムドメインを削除してください',
  },
  omni_sign_in_enabled: {
    name: 'Omniサインイン',
    limited: 'Omniサインイン',
    unlimited: 'Omniサインイン',
    not_eligible: 'Omniサインインを無効にしてください',
  },
  built_in_email_connector_enabled: {
    name: '組込みメールコネクタ',
    limited: '組込みメールコネクタ',
    unlimited: '組込みメールコネクタ',
    not_eligible: '組込みメールコネクタを削除してください',
  },
  social_connectors_limit: {
    name: 'ソーシャルコネクタ',
    limited: '{{count, number}} ソーシャルコネクタ',
    limited_other: '{{count, number}} ソーシャルコネクタ',
    unlimited: '無制限のソーシャルコネクタ',
    not_eligible: 'ソーシャルコネクタを削除してください',
  },
  standard_connectors_limit: {
    name: '無料の標準コネクタ',
    limited: '{{count, number}} 無料の標準コネクタ',
    limited_other: '{{count, number}} 無料の標準コネクタ',
    unlimited: '無制限の標準コネクタ',
    not_eligible: '標準コネクタを削除してください',
  },
  roles_limit: {
    name: 'ロール',
    limited: '{{count, number}} ロール',
    limited_other: '{{count, number}} ロール',
    unlimited: '無制限のロール',
    not_eligible: 'ロールを削除してください',
  },
  machine_to_machine_roles_limit: {
    name: 'マシン間ロール',
    limited: '{{count, number}} マシン間ロール',
    limited_other: '{{count, number}} マシン間ロール',
    unlimited: '無制限のマシン間ロール',
    not_eligible: 'マシン間ロールを削除してください',
  },
  scopes_per_role_limit: {
    name: 'ロールごとの権限',
    limited: '{{count, number}} ロールごとの権限',
    limited_other: '{{count, number}} ロールごとの権限',
    unlimited: '無制限のロールごとの権限',
    not_eligible: 'ロールの権限を削除してください',
  },
  hooks_limit: {
    name: 'Webhooks',
    limited: '{{count, number}}個のWebhook',
    limited_other: '{{count, number}}個のWebhook',
    unlimited: '無制限のWebhook',
    not_eligible: 'Webhookを削除してください',
  },
  organizations_enabled: {
    name: '組織',
    limited: '組織',
    unlimited: '組織',
    not_eligible: 'あなたの組織を削除してください',
  },
  audit_logs_retention_days: {
    name: '監査ログの保持期間',
    limited: '監査ログの保持期間: {{count, number}} 日',
    limited_other: '監査ログの保持期間: {{count, number}} 日',
    unlimited: '無制限の日数',
    not_eligible: '監査ログがありません',
  },
  email_ticket_support: {
    name: 'メールチケットサポート',
    limited: '{{count, number}}時間のメールチケットサポート',
    limited_other: '{{count, number}}時間のメールチケットサポート',
    unlimited: 'メールチケットサポート',
    not_eligible: 'メールチケットサポートなし',
  },
  mfa_enabled: {
    name: '二要素認証',
    limited: '二要素認証',
    unlimited: '二要素認証',
    not_eligible: '二要素認証を削除',
  },
  sso_enabled: {
    name: 'エンタープライズ SSO',
    limited: 'エンタープライズ SSO',
    unlimited: 'エンタープライズ SSO',
    not_eligible: 'エンタープライズ SSO を削除してください',
  },
  tenant_members_limit: {
    name: 'テナントメンバー',
    limited: '{{count, number}} テナントメンバー',
    limited_other: '{{count, number}} テナントメンバー',
    unlimited: '無制限のテナントメンバー',
    not_eligible: 'テナントメンバーを削除してください',
  },
  custom_jwt_enabled: {
    name: 'カスタム JWT',
    limited: 'カスタム JWT',
    unlimited: 'カスタム JWT',
    not_eligible: 'JWT クレームカスタマイザーを削除してください',
  },
  impersonation_enabled: {
    name: 'インパーソネーション',
    limited: 'インパーソネーション',
    unlimited: 'インパーソネーション',
    not_eligible: 'インパーソネーションを許可しません',
  },
  bring_your_ui_enabled: {
    name: 'カスタム UI',
    limited: 'カスタム UI',
    unlimited: 'カスタム UI',
    not_eligible: 'カスタム UI を削除してください',
  },
  idp_initiated_sso_enabled: {
    name: 'IDPによって開始された SSO',
    limited: 'IDPによって開始された SSO',
    unlimited: 'IDPによって開始された SSO',
    not_eligible: 'IDPによって開始された SSO は許可されていません',
  },
  saml_applications_limit: {
    name: 'SAML アプリケーション',
    limited: '{{count, number}} SAML アプリケーション',
    limited_other: '{{count, number}} SAML アプリケーション',
    unlimited: '無制限のSAMLアプリケーション',
    not_eligible: 'SAMLアプリケーションを削除してください',
  },
};

export default Object.freeze(quota_item);
