const { Router } = require('express');
const { asyncWrapper } = require('../helpers/asyncWrapper');
const { singUpValidation, singUp } = require('../controllers/userController');

const userRouter = Router();

userRouter.post('/register', singUpValidation, asyncWrapper(singUp));

module.exports = userRouter;
