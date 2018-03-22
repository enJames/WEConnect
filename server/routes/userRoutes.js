import express from 'express';
import RegisterUserController from '../controllers/registerUserController';
import LoginUserController from '../controllers/loginUserController';

const userRoute = express.Router();

// POST signup route
userRoute.post('/signup', RegisterUserController);

// POST login route
userRoute.post('/login', LoginUserController);

export default userRoute;
