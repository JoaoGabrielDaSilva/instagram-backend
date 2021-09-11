import { UsersRepository } from "../repositories/UsersRepository"

class UsersService {

  

  async register(usr_name: string, usr_email: string, usr_password: string, usr_profile_picture:string) {


    const usersRepository = new UsersRepository()

    console.log(usersRepository)
    
    const user = usersRepository.create({
      usr_name,
      usr_email,
      usr_password,
      usr_profile_picture
    })

    await usersRepository.save(user)

    return user
  }

}

export { UsersService }