import axios from 'axios';

axios.defaults.baseURL = 'https://vacancy-assistant.herokuapp.com';

const token = {
  setTokens(tokens) {
    const { access, refresh } = tokens;

    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
      'x-refresh-token': refresh,
    };

    localStorage.setItem('vacancyTokens', JSON.stringify(tokens));
  },
  getLocalTokens() {
    const { access, refresh } = JSON.parse(
      localStorage.getItem('vacancyTokens')
    );

    return { access, refresh };
  },
  unset() {
    localStorage.removeItem('vacancyTokens');
  },
};

export const register = async credentials => {
  try {
    const { password } = credentials;

    const response = await axios.post('/auth/register', credentials);

    return { ...response.data, password };
  } catch (err) {
    return err.response.data.message;
  }
};

export const login = async credentials => {
  try {
    const response = await axios.post('/auth/login', credentials);

    const { tokens } = response.data;
    token.setTokens(tokens);

    return response.data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const logout = () => {
  token.unset();
};

export const current = async () => {
  try {
    const getTokens = localStorage.getItem('vacancyTokens');
    const { access, refresh } = JSON.parse(getTokens);
    let tokens = { access, refresh };

    token.setTokens({ access, refresh });

    const response = await axios.get('/auth/current');

    const { access: accessToken } = response.data;
    if (accessToken) {
      token.setTokens({ access: accessToken, refresh });
      tokens = { ...tokens, access: accessToken };
    }

    return { user: response.data.user, tokens };
  } catch (err) {
    token.unset();
    return err.response.data.message;
  }
};
