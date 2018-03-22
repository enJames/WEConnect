import Sequelize from 'sequelize';
import ConnectToDatabase from '../connectToDatabase';

const CreateUsersTable = ConnectToDatabase.define('users', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default CreateUsersTable;
