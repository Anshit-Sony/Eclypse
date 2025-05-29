import { Router, Request, Response } from 'express';
import { allproduct, singleProduct } from '../controllers/productController';

const router = Router();

const taxRate = 0.212153356569; 

//get all the products
router.route('/').get(allproduct);
router.route('/:id').get(singleProduct);


export default router;