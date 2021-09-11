import { Router } from 'express'
import { UsersController } from '../controllers/UsersController'
import { hashPassword } from '../middlewares/userRegister'

const usersController = new UsersController()

const routes = Router()

routes.post('/user', hashPassword, usersController.create)



export default routes