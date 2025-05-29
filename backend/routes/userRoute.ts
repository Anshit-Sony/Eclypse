//this is the user route for the basic user related tasks.
//like: login, signup

import { Router, Request, Response } from 'express';
import { getUser } from '../controllers/userController';

const router = Router();

router.route('/').get(getUser) ;


// router.route('/').post(registerUser).get(protect,allUsers) //rgister new user get a user detail
// router.route('/login').post(authUser) //login

export default router;
