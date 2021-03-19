import axios from 'axios';

// axios.defaults.baseURL = 'https://vacancy-assistant.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3001';

const token = {
  setTokens(tokens) {
    const { access, refresh } = tokens;

    axios.defaults.headers.common.Authorization = `Bearer ${access}`;
    axios.defaults.headers.common.xRefreshToken = refresh;

    localStorage.setItem('vacancyTokens', JSON.stringify(tokens));
  },
  getLocalTokens() {
    const { access, refresh } = JSON.parse(
      localStorage.getItem('vacancyTokens')
    );

    return { access, refresh };
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
    axios.defaults.headers.common.xRefreshToken = '';
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

export const current = () => {
  const getTokens = localStorage.getItem('vacancyTokens');
  const { access, refresh } = JSON.parse(getTokens);
  token.setAccess(access);
  token.setRefresh(refresh);
  return axios('/auth/getCurrent')
    .then(response => {
      const { access, refresh } = response.data.tokens;
      token.setAccess(access);
      token.setRefresh(refresh);
      return response.data;
    })
    .catch(err => console.log(err));
};
