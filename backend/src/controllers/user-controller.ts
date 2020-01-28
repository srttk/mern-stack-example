import { Request, Response } from 'express';
import User from  '../models/User'

import { BadRequestError, ValidationError , AuthenticationError} from '../errors'


export const Login = async (req: Request, res: Response) => {

    const {email, password } = req.body;

    const user = await User.findOne({ where: {email:email}})

    if(!user) throw new AuthenticationError('User not found')
   
    res.json({msg: "Hello" })

}

export const Register = async (req: Request, res: Response) => {

   

    const { firstName, lastName, email, password } = req.body;

    // Check user exists or not

    const match = await User.findOne({ where: {email:email}})

    if(match) throw new AuthenticationError('Email alredy exists')

    console.log('Body ', req.body)

    const newuser = await User.create({firstName, lastName, email, password})

   

    res.json({message: "User rgisters "})

}