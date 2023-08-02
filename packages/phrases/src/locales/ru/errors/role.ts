const role = {
  name_in_use: 'Это имя роли {{name}} уже используется',
  scope_exists: 'Идентификатор области действия {{scopeId}} уже был добавлен в эту роль',
  user_exists: 'Идентификатор пользователя {{userId}} уже был добавлен в эту роль',
  default_role_missing:
    'Некоторые имена ролей по умолчанию отсутствуют в базе данных, пожалуйста, убедитесь в том, что сначала создали роли',
  internal_role_violation:
    'Возможно, вы пытаетесь обновить или удалить внутреннюю роль, что запрещено Logto. Если вы создаете новую роль, попробуйте другое имя, которое не начинается с "#internal:".',
};

export default Object.freeze(role);
