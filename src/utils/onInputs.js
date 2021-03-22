export let inputsOnValid = {};

export const onInputs = (name, isValid) => {
  inputsOnValid = { ...inputsOnValid, [name]: isValid };
};
