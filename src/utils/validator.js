export let inputsOnValidation = {};

export const validator = (name, value) => {
  let isValid;
  switch (name) {
    case 'email':
      isValid = value.includes('@') && value.includes('.');

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'password':
      isValid = value.length > 7;

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'confirmPassword':
      isValid = value;

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    case 'url':
      isValid =
        value.includes('http') && value.includes('//') && value.includes('.');

      inputsOnValidation = { ...inputsOnValidation, [name]: isValid };

      return isValid;

    default:
      return false;
  }
};
