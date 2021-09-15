import { Router } from 'express'
import { MessagesController } from '../controllers/MessagesController'

const messagesController = new MessagesController()

const routes = Router()

routes.get('/get-messages/:id', messagesController.index)



export default routes