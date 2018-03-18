import express from 'express';
import signUpUser from '../controllers/usersController';

const userRoute = express.Router();

// POST login route
userRoute.post('/signup', signUpUser);

export default userRoute;
