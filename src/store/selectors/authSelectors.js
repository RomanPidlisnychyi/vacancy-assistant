const getName = state => state.auth.user.name;
const getEmail = state => state.auth.user.email;
const getPass = state => state.auth.user.password;
const getToken = state => state.auth.tokens.access;

const authSelectors = { getName, getEmail, getPass, getToken };

export default authSelectors;
