import users from '../models/usersData';

const signUpUser = (req, res) => {
    const { firstname, lastname, email } = req.body;
    const registrationRequest = {
        id: (users.length + 1),
        firstname,
        lastname,
        email
    };

    let exists;

    users.forEach((user) => {
        if ((user.id === registrationRequest.id) || (user.email === registrationRequest.email)) {
            exists = true;
        }
    });

    if (exists) {
        return res.status(400).json({
            message: 'User already exists.'
        });
    }
    return res.status(201).json({
        message: 'Registration successful!',
        user: registrationRequest
    });
};

const signUpUser = (req, res) => {
    const { firstname, lastname, email } = req.body;
    const registrationRequest = {
        id: (users.length + 1),
        firstname,
        lastname,
        email
    };

    let exists;

    users.forEach((user) => {
        if ((user.id === registrationRequest.id) || (user.email === registrationRequest.email)) {
            exists = true;
        }
    });

    if (exists) {
        return res.status(400).json({
            message: 'User already exists.'
        });
    }
    return res.status(201).json({
        message: 'Registration successful!',
        user: registrationRequest
    });
};

export default signUpUser;
