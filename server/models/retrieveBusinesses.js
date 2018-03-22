import connectToDatabase from '../connectToDatabase';

const RetrieveBusinesses = () => {
    connectToDatabase.query('SELECT * FROM businesses').then(businessTableRows => businessTableRows[0][0]);
};

export default RetrieveBusinesses;
