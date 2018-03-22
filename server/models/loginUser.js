import ConnectToDatabase from './connectToDatabase';
import SendResponse from './SendResponse';

const LoginUser = (res, email, password) => ConnectToDatabase.query(`SELECT * FROM users WHERE email='${email}'`)
    .then((data) => {
        const queryResult = data[0][0];
        if (queryResult.password !== password) {
            return SendResponse(res, 400, 'Credentials do not match');
        }
        return SendResponse(res, 200, 'Login successful');
    })
    .catch(error => SendResponse(res, 500, 'Credentials do not match', error));

export default LoginUser;
