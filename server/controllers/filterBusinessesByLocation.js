import ConnectToDatabase from '../models/connectToDatabase';
import SendResponse from '../models/sendResponse';

const FilterBusinessesByLocation = (req, res) => {
    const queryBusinessLocation = req.query.location;
    ConnectToDatabase.query(`SELECT * FROM businesses WHERE state='${queryBusinessLocation}'`)
        .then(businessTableRows => SendResponse(
            res,
            200,
            `Found ${businessTableRows[0].length} in ${queryBusinessLocation}.`,
            businessTableRows[0]
        ))
        .catch(() => SendResponse(res, 500, 'There was an error fectching businesses'));
};

export default FilterBusinessesByLocation;
