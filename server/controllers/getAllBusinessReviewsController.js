import ConnectToDatabase from '../models/connectToDatabase';
import SendResponse from '../models/sendResponse';

// Get list of all businesses
const GetAllBusinessReviewsController = (req, res) => {
    ConnectToDatabase.query('SELECT * FROM reviews')
        .then(reviewsTableRows => SendResponse(
            res,
            200,
            `Found ${reviewsTableRows[0].length} reviews.`,
            reviewsTableRows[0]
        ))
        .catch(() => SendResponse(res, 500, 'There was an error fectching businesses'));
};

export default GetAllBusinessReviewsController;
