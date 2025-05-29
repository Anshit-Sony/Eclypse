//define the user controller functions here
import { Request, Response } from "express";

export const getUser=(req: Request, res: Response) => {
    res.status(200).json({ message: 'User Route' });
};

//other controller functions like
//registerUser
//allUser
//authUser