import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";



class UsersController {

  async index(request: Request, response: Response) {
    return response.send("OK")
  }

  async create(request: Request, response: Response) {
    const { name, email, password, profile_picture } = request.body

    const usersService = new UsersService()

    try {
      const user = await usersService.register(name, email, password, profile_picture)

      return response.json(user)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }  
}

export { UsersController }