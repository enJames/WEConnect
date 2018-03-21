import Sequelize from 'sequelize';
import connectToDatabase from '../connectToDatabase';

const createBusinessesTable = connectToDatabase.define('businesses', {
    BusinessId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    BusinessName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    Category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    EmailAddress: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    Website: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    City: {
        type: Sequelize.STRING,
        allowNull: false
    },
    State: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Country: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default createBusinessesTable;
