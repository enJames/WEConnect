import express from 'express';
import {
    allBusinesses,
    businessDetails,
    createBusiness,
    deleteBusiness,
    updateBusiness
} from '../controllers/businessesController';
import { createReview, getBusinessReviews } from '../controllers/reviewsController';

const router = express.Router();

// GET allBusinesses
router.get('/', allBusinesses);

// GET details of a business
router.get('/:businessId', businessDetails);

// GET reviews of a business
router.get('/:businessId/reviews', getBusinessReviews);

// Create a business
router.post('/', createBusiness);

// Create a review
router.post('/:businessId/reviews', createReview);

// PUT details of a business
router.put('/:businessId', updateBusiness);

// DELETE a business
router.delete('/:businessId', deleteBusiness);

export default router;
