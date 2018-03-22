import SendResponse from '../models/sendResponse';
import LoginUser from '../models/loginUser';

const LoginUserController = (req, res) => {
    const { email, password } = req.body;

    if (!email || (email.trim() === '')) {
        SendResponse(res, 400, 'Please enter a valid email address');
    } else if (!password || (password.trim() === '')) {
        SendResponse(res, 400, 'Enter your password');
    }
    return LoginUser(res, email, password);
};

export default LoginUserController;
