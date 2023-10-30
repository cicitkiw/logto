const mfa = {
  totp: '身份验证应用 OTP',
  webauthn: '通行证',
  backup_code: '备份代码',
  link_totp_description: '例如，Google Authenticator 等。',
  link_webauthn_description: '链接您的设备或 USB 硬件',
  link_backup_code_description: '生成备份代码',
  verify_totp_description: '在应用程序中输入一次性代码',
  verify_webauthn_description: '验证您的设备或 USB 硬件',
  verify_backup_code_description: '粘贴您保存的备份代码',
  add_mfa_factors: '添加两步验证',
  add_mfa_description: '已启用两步验证。选择第二种验证方法以进行安全登录。',
  verify_mfa_factors: '两步验证',
  verify_mfa_description: '此帐户已启用两步验证。请选择第二种验证身份的方式。',
  add_authenticator_app: '添加身份验证应用',
  step: '步骤 {{step, number}}: {{content}}',
  scan_qr_code: '扫描此 QR 码',
  scan_qr_code_description:
    '使用身份验证应用程序（如 Google Authenticator、Duo Mobile、Authy 等）扫描以下 QR 码。',
  qr_code_not_available: '无法扫描 QR 码？',
  copy_and_paste_key: '复制并粘贴密钥',
  copy_and_paste_key_description:
    '将以下密钥复制并粘贴到身份验证应用程序中，如 Google Authenticator、Duo Mobile、Authy 等。',
  want_to_scan_qr_code: '想要扫描 QR 码吗？',
  enter_one_time_code: '输入一次性代码',
  enter_one_time_code_link_description: '输入身份验证应用生成的 6 位验证码。',
  enter_one_time_code_description: '此帐户已启用两步验证。请输入您身份验证应用中看到的一次性代码。',
  link_another_mfa_factor: '切换到另一种方法',
  save_backup_code: '保存您的备份代码',
  save_backup_code_description:
    '如果在其他方式的两步验证中遇到问题，您可以使用这些备份代码之一访问您的帐户。每个代码只能使用一次。',
  backup_code_hint: '确保复制它们并保存在安全的地方。',
  enter_a_backup_code: '输入备份代码',
  enter_backup_code_description: '输入初始启用两步验证时保存的备份代码。',
  create_a_passkey: '创建通行证',
  create_passkey_description:
    '使用设备生物识别、安全密钥（例如 YubiKey）或其他可用方法注册您的通行证。',
  try_another_verification_method: '尝试其他验证方法',
  verify_via_passkey: '通过通行证验证',
  verify_via_passkey_description:
    '使用通行证通过设备密码或生物识别、扫描 QR 码或使用 USB 安全密钥（如 YubiKey）进行验证。',
  secret_key_copied: '密钥已复制。',
  backup_code_copied: '备份代码已复制。',
  webauthn_not_ready: 'WebAuthn 尚未准备就绪。请稍后重试。',
  webauthn_not_supported: '此浏览器不支持 WebAuthn。',
  webauthn_failed_to_create: '创建失败。请重试。',
  webauthn_failed_to_verify: '验证失败。请重试。',
};

export default Object.freeze(mfa);
