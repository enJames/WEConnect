import reviews from '../models/reviewsData';

const createReview = (req, res) => {
    const { businessId, reviewer, reviewText } = req.body;
    const review = {
        businessId,
        reviewer,
        reviewText
    };
    reviews.push(review);
    res.status(201).json({
        message: 'Review created',
        review
    });
};

export default createReview;
