import express from 'express';
import { signUpUser, loginUser } from '../controllers/usersController';

const userRoute = express.Router();

// POST signup route
userRoute.post('/signup', signUpUser);

// POST login route
userRoute.post('/login', loginUser);

export default userRoute;
