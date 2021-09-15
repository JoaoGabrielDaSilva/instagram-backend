import { Router } from 'express'
import { ChatsController } from '../controllers/ChatsController'

const chatsController = new ChatsController()

const routes = Router()

routes.get('/get-chat-messages/:id', chatsController.listMessagesByChatId)


export default routes