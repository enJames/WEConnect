import SendResponse from '../models/sendResponse';
import ConnectToDatabase from '../models/connectToDatabase';

const DeleteABusinessController = (req, res) => {
    const requestBusinessId = req.params.businessId;

    ConnectToDatabase.query(`DELETE FROM businesses WHERE business_id='${requestBusinessId}'`)
        .then(() => SendResponse(
            res,
            200,
            'Business deleted!'
        ))
        .catch(() => SendResponse(res, 500, 'Business could not be deleted'));
};

export default DeleteABusinessController;
