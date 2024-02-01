import express from 'express';
import { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourbySearch, getFeaturedTour, getTourCount } from '../Controller/Controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()


//create new tour
router.post('/', verifyAdmin, createTour);

//update new tour
router.put('/:id', verifyAdmin, updateTour);

//delete tour
router.delete('/:id', verifyAdmin, deleteTour);

//get single tour
router.get('/:id', getSingleTour);

//get all tours
router.get('/', getAllTour);

//get tour by search parameter
router.get('/search/getTourbySearch', getTourbySearch);

//get featured tour
router.get('/search/getFeaturedTour', getFeaturedTour);

//get number of Tour
router.get('/search/getTourCount', getTourCount);

export default router;