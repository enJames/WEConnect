import express from 'express';
import RegisterBusinessController from '../controllers/registerBusinessController';

const router = express.Router();

// GET allBusinesses
router.get('/');

// GET details of a business
router.get('/:businessId');

// GET reviews of a business
router.get('/:businessId/reviews');

// Create a business
router.post('/', RegisterBusinessController);

// Create a review
router.post('/:businessId/reviews');

// PUT details of a business
router.put('/:businessId');

// DELETE a business
router.delete('/:businessId');

export default router;
