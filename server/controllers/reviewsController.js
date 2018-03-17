import reviews from '../models/reviewsData';
import businesses from '../models/businessData'

const createReview = (req, res) => {
    const { businessId, reviewer, reviewText } = req.body;
    const review = {
        businessId,
        reviewer,
        reviewText
    };

    let theBusiness;

    businesses.forEach((business) => {
        if (business.id === req.params.businessId) {
            theBusiness = business;
        }
    });
    if (theBusiness) {
        reviews.push(review);
        return res.status(201).json({
            message: 'Review created',
            review
        });
    }
    return res.status(404).json({
        message: 'Business does not exist'
    });
};

export default createReview;
