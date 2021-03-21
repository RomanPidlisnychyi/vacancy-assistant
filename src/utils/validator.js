export const validator = (type, value) => {
  switch (type) {
    case 'email':
      return value.includes('@') && value.includes('.');

    case 'password':
      return value !== '' && value.length > 7;

    default:
      return false;
  }
};
