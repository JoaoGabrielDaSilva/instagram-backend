import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthService {

  async find(usr_email: string, usr_password: string) {


    const usersRepository = getCustomRepository(UsersRepository)
    
    const user = await usersRepository.findOne({ usr_email })

    if (!user) {
      throw new Error("Usuário não registrado")
    }

    const isValidPassword = await bcrypt.compare(usr_password, user.usr_password )

    if (!isValidPassword) {
      throw new Error("Usuário e/ou Senha incorretos!")
    }

    const token = jwt.sign({ id: user.usr_id }, process.env.ACCESS_TOKEN_SECRET)

    delete user.usr_password
    delete user.usr_created_at
    delete user.usr_updated_at
    
    return {
      user,
      token
    }
  }

}

export { AuthService }