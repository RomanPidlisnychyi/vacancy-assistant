export const validator = (name, value) => {
  switch (name) {
    case 'email':
      return value.includes('@') && value.includes('.');

    case 'password':
      return value.length > 7;

    case 'url':
      return (
        value.includes('http') && value.includes('//') && value.includes('.')
      );

    default:
      return false;
  }
};
