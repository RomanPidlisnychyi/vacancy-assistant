const getName = state => state.auth.user.name;
const getToken = state => state.auth.tokens.access;

export default { getName, getToken };
