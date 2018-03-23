import Sequelize from 'sequelize';
import ConnectToDatabase from './connectToDatabase';

const CreateReviewsTable = ConnectToDatabase.define('reviews', {
    review_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    reviewer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    review: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true
});

export default CreateReviewsTable;
