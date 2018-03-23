import express from 'express';
import GetAllBusinessesController from '../controllers/getAllBusinessesController';
import GetABusinessController from '../controllers/getABusinessController';
import RegisterBusinessController from '../controllers/registerBusinessController';
import UpdateABusinesController from '../controllers/updateABusinessController';
import DeleteABusinessController from '../controllers/deleteABusinessController';
import AddAReviewController from '../controllers/addAReviewController';
import GetAllBusinessReviewsController from '../controllers/getAllBusinessReviewsController';

const router = express.Router();

// GET allBusinesses
router.get('/', GetAllBusinessesController);

// GET details of a business
router.get('/:businessId', GetABusinessController);

// GET reviews of a business
router.get('/:businessId/reviews', GetAllBusinessReviewsController);

// Create a business
router.post('/', RegisterBusinessController);

// Create a review
router.post('/:businessId/reviews', AddAReviewController);

// PUT details of a business
router.put('/:businessId', UpdateABusinesController);

// DELETE a business
router.delete('/:businessId', DeleteABusinessController);

export default router;
