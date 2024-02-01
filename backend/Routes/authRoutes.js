import express from 'express';
import { login, register } from '../Controller/authController.js';


const router = express.Router()

//register user
router.post('/register', register);

//login user
router.post('/login', login);



export default router;