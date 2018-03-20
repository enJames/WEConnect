import reviews from '../models/reviewsData';
import businesses from '../models/businessData';

const createReview = (req, res) => {
    let review;

    businesses.forEach((business) => {
        if (business.id === parseInt(req.params.businessId, 10)) {
            review = req.body;
        }
    });
    if (review) {
        return res.status(201).json({
            message: 'Review created',
            review
        });
    }
    return res.status(404).json({
        message: 'Business does not exist'
    });
};

const getBusinessReviews = (req, res) => {
    const allBusinessReviews = [];

    reviews.forEach((review) => {
        if (review.businessId === Number(req.params.businessId)) {
            allBusinessReviews.push(review);
        }
    });
    return res.status(200).json({
        message: `Found ${allBusinessReviews.length} reviews`,
        allBusinessReviews
    });
};

export {
    createReview,
    getBusinessReviews
};
