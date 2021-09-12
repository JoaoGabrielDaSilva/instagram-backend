import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";



class AuthController {

  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body

    const authService = new AuthService()

    try {
      const user = await authService.find(email, password)

      return response.json(user)
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
  }  
}

export { AuthController }