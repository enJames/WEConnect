import CreateUsersTable from './createUsersTable';
import SendResponse from './sendResponse';

const RegisterUser = (
    res,
    userName,
    firstName,
    lastName,
    email,
    gender,
    password
) => {
    CreateUsersTable.sync()
        .create({
            userName,
            firstName,
            lastName,
            email,
            gender,
            password
        })
        .then(() => SendResponse(res, 200, 'Registration successful!'))
        .catch(error => SendResponse(res, 500, 'There was a problem', error));
};

export default RegisterUser;
