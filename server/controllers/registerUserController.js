import SendResponse from '../models/sendResponse';
import RegisterUser from '../models/registerUser';

const registerUserController = (req, res) => {
    const {
        userName,
        firstName,
        lastName,
        email,
        gender,
        password,
        repassword
    } = req.body;

    if (!userName || (userName.trim() === '')) {
        return SendResponse(res, 400, 'Please enter a Username');
    } else if (!firstName || (firstName.trim() === '')) {
        return SendResponse(res, 400, 'Please enter a firstName');
    } else if (!lastName || (lastName.trim() === '')) {
        return SendResponse(res, 400, 'Please enter a lastName');
    } else if (!email || (email.trim() === '')) {
        return SendResponse(res, 400, 'Please enter a valid email address');
    } else if (!gender || (gender === '')) {
        return SendResponse(res, 400, 'Please select your gender');
    } else if (!password || (password.length < 6)) {
        return SendResponse(res, 400, 'Please enter a password with at least 6 characters');
    } else if (password !== repassword) {
        return SendResponse(res, 400, 'passwords do not match');
    }
    return RegisterUser(
        res,
        userName,
        firstName,
        lastName,
        email,
        gender,
        password
    );
};

export default registerUserController;
