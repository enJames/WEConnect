import express from 'express';
import {
    allBusinesses,
    businessDetails,
    createBusiness,
    deleteBusiness,
    updateBusiness
} from '../controllers/businessesController';

const router = express.Router();

// GET allBusinesses
router.get('/', allBusinesses);

// GET details of a business
router.get('/:businessId', businessDetails);

// Create a business
router.post('/', createBusiness);

// PUT details of a business
router.put('/:businessId', updateBusiness);

// DELETE a business
router.delete('/:businessId', deleteBusiness);


export default router;
