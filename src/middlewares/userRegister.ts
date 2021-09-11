import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt'


export async function hashPassword(request: Request, response: Response, next: NextFunction) {

  const { password } = request.body

  try {
    const salt = await bcrypt.genSalt(10)
    
    const hashedPassword = await bcrypt.hash(password, salt)

    request.body.password = hashedPassword
    next()

  } catch (error) {
    next(error)
  }

}