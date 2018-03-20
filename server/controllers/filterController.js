import businesses from '../models/businessData';

const filterBusinessesByLocation = (req, res) => {
    const queryBusinessLocation = req.query.location;
    const result = [];
    businesses.forEach((business) => {
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

const filterBusinessesByCategory = (req, res) => {
    const queryBusinessCategory = req.query.category;
    const result = [];
    businesses.forEach((business) => {
        if (queryBusinessCategory === business.category) {
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

export {
    filterBusinessesByLocation,
    filterBusinessesByCategory
};
