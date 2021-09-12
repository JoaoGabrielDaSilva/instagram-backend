import { Router } from 'express'
import { UsersController } from '../controllers/UsersController'
import authMiddleware from '../middlewares/authMiddleware'

const usersController = new UsersController()

const routes = Router()

routes.post('/user', usersController.create)
routes.get('/users', authMiddleware, usersController.index)



export default routes