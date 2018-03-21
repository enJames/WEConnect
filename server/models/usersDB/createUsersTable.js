import Sequelize from 'sequelize';
import connectToDatabase from '../connectToDatabase';

const createUsersTable = connectToDatabase.define('businesses', {
    Username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    LastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    EmailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Gender: {
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

export default createUsersTable;
