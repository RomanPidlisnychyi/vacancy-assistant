import axios from 'axios';

axios.defaults.baseURL = 'https://vacancy-assistant.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3001';

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
  setAccessToken(access) {
    const { refresh } = token.getLocalTokens();
    token.setTokens({ access, refresh });
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
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const login = async credentials => {
  try {
    const response = await axios.post('/auth/login', credentials);

    const { tokens } = response.data;
    token.setTokens(tokens);

    return response.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
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
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const refresh = async () => {
  try {
    const response = await axios.get('/auth/refresh');
    const { access } = response.data;

    if (access) {
      token.setAccessToken(access);
    }

    return access;
  } catch (err) {
    token.unset();
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const vacancies = async () => {
  try {
    const response = await axios.get('/vacancy');

    return response.data;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const createVacancy = async vacancy => {
  try {
    const response = await axios.post('/vacancy', vacancy);

    const { access } = response.data;

    if (access) {
      token.setAccessToken(access);
    }

    return response.data.vacancy;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};

export const deleteVacancy = async vacancyId => {
  try {
    const response = await axios.delete(`/vacancy/${vacancyId}`);

    const {
      data: { access },
      status,
    } = response;

    if (access) {
      token.setAccessToken(access);
    }

    return status;
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    return 'Проверьте интернет';
  }
};
