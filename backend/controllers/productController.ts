//define the product controller functions here
import { products } from "../Data/data";
import { Request, Response } from "express";

let taxRate:number=0.212153356569;

export const allproduct=(req: Request, res: Response) => {
    const productsWithTax = products.map(product => ({
      ...product,
      priceAfterTax: Math.round(product.price * (1 + taxRate)),
    }));
    res.status(200).json(productsWithTax);
};

export const singleProduct=(req: Request,res:Response):void =>{
    const productId = Number(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  }

  const taxRate = 0.1;
  const productAfterTax = {
    ...product,
    priceAfterTax: Math.round(product.price * (1 + taxRate)),
  };

    res.status(200).json(productAfterTax);
}