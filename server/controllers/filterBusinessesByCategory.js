import RetrieveBusinesses from '../models/businessDB/retrieveBusinesses';

const FilterBusinessesByCategory = (req, res) => {
    const queryBusinessCategory = req.query.category;
    const result = [];
    RetrieveBusinesses.forEach((business) => {
        if (queryBusinessCategory === business.Category) {
            result.push(business);
        }
    });
    if (result.length > 0) {
        return res.status(200).json({
            message: `Found ${result.lenth} businesses in ${queryBusinessCategory}`,
            result
        });
    }
    return res.status(404).json({
        message: `No registered business in the category "${queryBusinessCategory}"`
    });
};

export default FilterBusinessesByCategory;
