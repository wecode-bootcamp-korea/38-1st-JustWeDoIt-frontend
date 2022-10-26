const RULES = {
  email: value => value.length > 0,
  password: value => value.length > 0,
  userName: value => value.length > 0,
};

export default RULES;
