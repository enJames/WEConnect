import ConnectToDatabase from '../models/connectToDatabase';
import SendResponse from '../models/sendResponse';

const GetABusinessController = (req, res) => {
    const requestBusinessId = req.params.businessId;
    ConnectToDatabase.query(`SELECT * FROM businesses WHERE business_id='${requestBusinessId}'`)
        .then(businessTableRows => SendResponse(
            res,
            200,
            `Found ${businessTableRows[0].length} businesses.`,
            businessTableRows[0]
        ))
        .catch(() => SendResponse(res, 500, 'There was an error fectching businesses'));
};

export default GetABusinessController;
