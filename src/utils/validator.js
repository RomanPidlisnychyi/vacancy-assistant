export const validator = (type, value) => {
  switch (type) {
    case 'email':
      return value.includes('@') && value.includes('.');

    case 'password':
      return value !== '' && value.length > 7;

    case 'url':
      return (
        value.includes('http') && value.includes('//') && value.includes('.')
      );

    default:
      return false;
  }
};
