import RetrieveBusinesses from '../models/businessDB/retrieveBusinesses';
import FilterBusinessesByLocation from './filterBusinessesByLocation';
import FilterBusinessesByCategory from './filterBusinessesByCategory';

// Get list of all businesses
const GetAllBusinesses = (req, res) => {
    if (req.query) {
        if (req.query.location) {
            return FilterBusinessesByLocation(req, res);
        }
        if (req.query.category) {
            return FilterBusinessesByCategory(req, res);
        }
    }
    return res.status(200).json({
        message: 'Search results for all businesses',
        RetrieveBusinesses
    });
};

export default GetAllBusinesses;
