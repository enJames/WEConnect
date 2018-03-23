import Sequelize from 'sequelize';
import ConnectToDatabase from './connectToDatabase';

const CreateBusinessesTable = ConnectToDatabase.define('businesses', {
    business_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    business_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    website: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

CreateBusinessesTable.sync();

export default CreateBusinessesTable;
