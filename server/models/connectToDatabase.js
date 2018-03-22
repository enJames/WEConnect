import Sequelize from 'sequelize';

// const connectToDatabase = new Sequelize('postgres://king:pass@localhost:5432/weconnect');

const ConnectToDatabase = new Sequelize('weconnect', 'king', 'pass', {
    host: 'localhost',
    dialect: 'postgres'
});

export default ConnectToDatabase;