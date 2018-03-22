import CreateBusinessesTable from './createBusinessesTable';
import SendResponse from './sendResponse';

const RegisterBusiness = (
    res,
    businessName,
    category,
    email,
    website,
    address1,
    address2,
    city,
    state,
    country
) => {
    CreateBusinessesTable.sync()
        .create({
            businessName,
            category,
            email,
            website,
            address1,
            address2,
            city,
            state,
            country
        })
        .then(() => SendResponse(res, 200, 'Registration successful!'))
        .catch(() => SendResponse(res, 500, 'There was a problem'));
};

export default RegisterBusiness;
