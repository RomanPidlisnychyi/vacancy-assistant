const Joi = require('joi');
const ErrorConstructor = require('../helpers/ErrorConstructor');

const singUpValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required().min(6).max(255),
    name: Joi.string().required(),
  }).required();

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ErrorConstructor(validationResult.error.message, 400));
  }

  next();
};

const singUp = async (req, res, next) => {
  console.log('Hello');

  return res.status(201).json({ message: 'Well done!' });
};

module.exports = {
  singUpValidation,
  singUp,
};
