import ConnectToDatabase from '../models/connectToDatabase';
import SendResponse from '../models/sendResponse';

const FilterBusinessesByCategory = (req, res) => {
    const queryBusinessCategory = req.query.category;
    ConnectToDatabase.query(`SELECT * FROM businesses WHERE category='${queryBusinessCategory}'`)
        .then(businessTableRows => SendResponse(
            res,
            200,
            `Found ${businessTableRows[0].length} in ${queryBusinessCategory}.`,
            businessTableRows[0]
        ))
        .catch(() => SendResponse(res, 500, 'There was an error fectching businesses'));
};

export default FilterBusinessesByCategory;
