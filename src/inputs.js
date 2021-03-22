export const inputs = [
  {
    name: 'name',
    type: 'text',
    validation: true,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'email@example.com',
    message: 'Incorrect email!',
    validation: true,
  },
  {
    name: 'password',
    type: 'password',
    message: 'Pass length must be > 7!',
    validation: true,
  },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'confirm password',
    message: 'Passwords do not match!',
    validation: true,
  },
  {
    name: 'company',
    type: 'text',
    validation: true,
  },
  {
    name: 'url',
    type: 'text',
    placeholder: 'vacancy URL',
    message: 'http_s://example.com',
    validation: true,
  },
  {
    name: 'phone',
    type: 'tel',
  },
  {
    name: 'position',
    type: 'text',
  },
  {
    name: 'stack',
    type: 'text',
  },
  {
    name: 'location',
    type: 'text',
  },
];
