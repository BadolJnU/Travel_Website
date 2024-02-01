import express from 'express';
import { createUser, updateUser, deleteUser, getSingleUser, getAllUser } from '../Controller/userController.js';

import {verifyAdmin, verifyUser} from '../utils/verifyToken.js'

const router = express.Router()

//create neweUser
router.post('/', verifyUser, createUser);

//update User
router.put('/:id', verifyUser, updateUser);

//delete User
router.delete('/:id', verifyUser, deleteUser);

//get single User
router.get('/:id', verifyUser, getSingleUser);

//get all Users
router.get('/', verifyAdmin, getAllUser);

export default router;