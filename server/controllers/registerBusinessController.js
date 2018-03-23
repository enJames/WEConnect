import SendResponse from '../models/sendResponse';
import RegisterBusiness from '../models/registerBusiness';

const RegisterBusinessController = (req, res) => {
    const {
        businessName,
        category,
        email,
        website,
        address1,
        address2,
        city,
        state,
        country
    } = req.body;

    if (!businessName || (businessName.trim() === '')) {
        return SendResponse(res, 400, 'Please enter an businessName');
    } else if (!category || (category === '')) {
        return SendResponse(res, 400, 'Business category is not set');
    } else if (!email || (email.trim() === '')) {
        return SendResponse(res, 400, 'Please enter a valid business email address');
    } else if (!website || (website.trim() === '')) {
        return SendResponse(res, 400, 'Please enter a password with at least 6 characters');
    } else if (!address1 || !address2 || (address1 === '') || (address2 === '')) {
        return SendResponse(res, 400, 'Please enter business address');
    } else if (!city || (city === '')) {
        return SendResponse(res, 400, 'Please enter a password with at least 6 characters');
    } else if (!state || (state === '')) {
        return SendResponse(res, 400, 'passwords do not match');
    } else if (!country || (country === '')) {
        return SendResponse(res, 400, 'passwords do not match');
    }
    const address = `${address1}, ${address2}`;
    return RegisterBusiness(
        res,
        businessName,
        category,
        email,
        website,
        address,
        city,
        state,
        country
    );
};

export default RegisterBusinessController;
