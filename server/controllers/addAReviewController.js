import SendResponse from '../models/sendResponse';
import AddAReview from '../models/addAReview';

const AddAReviewController = (req, res) => {
    const {
        reviewer,
        email,
        rating,
        review
    } = req.body;

    if (!reviewer || (reviewer.trim() === '')) {
        return SendResponse(res, 400, 'Please enter a name');
    } else if (!rating) {
        return SendResponse(res, 400, 'Please rate business.');
    } else if (!review || (review === '') || (review.length < 10)) {
        return SendResponse(res, 400, 'passwords do not match');
    }
    return AddAReview(
        res,
        reviewer,
        email,
        rating,
        review
    );
};

export default AddAReviewController;
