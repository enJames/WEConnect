import CreateBusinessesTable from './createBusinessesTable';
import SendResponse from './sendResponse';

const RegisterBusiness = (
    res,
    business_name,
    category,
    email,
    website,
    address,
    city,
    state,
    country
) => {
    CreateBusinessesTable.sync();
    CreateBusinessesTable.create({
        business_name,
        category,
        email,
        website,
        address,
        city,
        state,
        country
    })
        .then(() => SendResponse(res, 200, 'Registration successful!'))
        .catch(error => SendResponse(res, 500, 'There was a problem', error));
};

export default RegisterBusiness;
