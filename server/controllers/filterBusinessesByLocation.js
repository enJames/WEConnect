import RetrieveBusinesses from '.../models/businessDB/retrieveBusinesses.j';

const FilterBusinessesByLocation = (req, res) => {
    const queryBusinessLocation = req.query.location;
    const result = [];
    RetrieveBusinesses.forEach((business) => {
        if (queryBusinessLocation === business.location) {
            result.push(business);
        }
    });

    if (result.length > 0) {
        return res.status(200).json({
            message: `Found ${result.lenth} businesses in ${queryBusinessLocation}`,
            result
        });
    }
    return res.status(404).json({
        message: `No registered business in the location "${queryBusinessLocation}"`
    });
};

export default FilterBusinessesByLocation;
