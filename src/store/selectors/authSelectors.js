export const getName = state => state.auth.user.name;
export const getEmail = state => state.auth.user.email;
export const getPass = state => state.auth.user.password;
export const getToken = state => state.auth.tokens.access;
export const getError = state => state.auth.err;
