const profile = {
  page_title: '账户管理',
  title: '账户管理',
  description: '在这里，你可以修改账户设置和管理个人信息，以确保账户安全。',
  settings: {
    title: '账户设置',
    profile_information: '个人信息',
    avatar: '头像',
    name: '姓名',
    username: '用户名',
  },
  link_account: {
    title: '关联账户',
    email_sign_in: '邮件登录',
    email: '邮件',
    social_sign_in: '社交账号登录',
    link_email: '绑定邮箱',
    link_email_subtitle: '绑定邮箱以便登录或帮助恢复账户。',
    email_required: '邮箱不能为空',
    invalid_email: '无效的邮箱地址',
    identical_email_address: '输入的邮箱地址与当前邮箱地址相同',
    anonymous: '匿名',
  },
  password: {
    title: '密码与安全',
    password: '密码',
    password_setting: '密码设置',
    new_password: '新密码',
    confirm_password: '确认密码',
    enter_password: '输入当前密码',
    enter_password_subtitle: '为确保账户安全，在修改密码前，请先输入当前密码以通过身份验证。',
    set_password: '设置密码',
    verify_via_password: '通过密码验证',
    show_password: '显示密码',
    required: '密码不能为空',
    min_length: '密码最少需要{{min}}个字符',
    do_not_match: '密码不匹配，请重新输入。',
  },
  code: {
    enter_verification_code: '输入验证码',
    enter_verification_code_subtitle: '验证码已发送至 <strong>{{target}}</strong>',
    verify_via_code: '通过邮箱验证码验证',
    resend: '重新发送验证码',
    resend_countdown: '在 {{countdown}} 秒后重新发送',
  },
  delete_account: {
    title: '删除账户',
    label: '删除账户',
    description: '删除账户将会删除所有个人信息、用户数据和配置。此操作无法撤销。',
    button: '删除账户',
    dialog_paragraph_1:
      '很抱歉听到你想要删除你的帐户。删除你的帐户将永久删除所有数据，包括用户信息、日志和设置，此操作无法撤销。因此，请确保在继续之前备份任何重要数据。',
    dialog_paragraph_2:
      '要继续删除帐户的删除过程，请通过 <a>mail</a> 向我们的支持团队发送主题为“帐户删除请求”的邮件。我们将协助你并确保所有数据都已从我们的系统中正确删除。',
    dialog_paragraph_3:
      '感谢你选择 Logto Cloud。如果你有任何进一步的问题或疑虑，请随时与我们联系。',
  },
  set: '设置',
  change: '修改',
  link: '关联',
  unlink: '取消关联',
  not_set: '未设置',
  change_avatar: '修改头像',
  change_name: '修改姓名',
  change_username: '修改用户名',
  set_name: '设置姓名',
  email_changed: '已成功绑定邮箱。',
  password_changed: '已重置密码。',
  updated: '{{target}}更改成功。',
  linked: '{{target}}账号绑定成功。',
  unlinked: '{{target}}账号解绑成功。',
  email_exists_reminder: '该邮箱 {{email}} 已被其他账号绑定，请更换邮箱。',
  unlink_confirm_text: '确定解绑',
  unlink_reminder: '解绑后，用户将无法使用该 <span></span> 账号进行登录。确定要解绑吗？',
};

export default Object.freeze(profile);
