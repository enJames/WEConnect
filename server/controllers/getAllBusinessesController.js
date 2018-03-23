import ConnectToDatabase from '../models/connectToDatabase';
import SendResponse from '../models/sendResponse';
import FilterBusinessesByCategory from './filterBusinessesByCategory';
import FilterBusinessesByLocation from './filterBusinessesByLocation';

// Get list of all businesses
const GetAllBusinessesController = (req, res) => {
    if (!req.query) {
        ConnectToDatabase.query('SELECT * FROM businesses')
            .then(businessTableRows => SendResponse(
                res,
                200,
                `Found ${businessTableRows[0].length} businesses.`,
                businessTableRows[0]
            ))
            .catch(() => SendResponse(res, 500, 'There was an error fectching businesses'));
    } else if (req.query.category) {
        return FilterBusinessesByCategory(req, res);
    } else {
        return FilterBusinessesByLocation(req, res);
    }
};

export default GetAllBusinessesController;
