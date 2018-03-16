import express from 'express';
import {
    allBusinesses,
    businessDetails,
    createBusiness,
    deleteBusiness,
    updateBusiness
} from '../controllers/businesses';

const router = express.Router();

// GET allBusinesses
router.get('/', allBusinesses);

export default router;
