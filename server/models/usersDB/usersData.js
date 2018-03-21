const users = [
    {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'email@email.com',
        password: 'user1234'
    },
    {
        id: 2,
        firstname: 'Billy',
        lastname: 'Grey',
        email: 'mailing@email.com',
        password: 'user5678'
    }
];

/*
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
*/

export default users;
