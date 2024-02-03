import express from 'express';
import { createReview } from '../Controller/reviewController.js';

const router = express.Router();

router.post('/:tourId', createReview)

export default router;