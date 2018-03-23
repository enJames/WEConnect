import CreateReviewsTable from './createReviewsTable';
import SendResponse from './sendResponse';

const AddAReview = (
    res,
    reviewer,
    email,
    rating,
    review
) => {
    CreateReviewsTable.sync();
    CreateReviewsTable.create({
        reviewer,
        email,
        rating,
        review
    })
        .then(() => SendResponse(res, 200, 'Registration successful!'))
        .catch(error => SendResponse(res, 500, 'There was a problem', error));
};

export default AddAReview;
