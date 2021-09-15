import {Request, Response } from 'express'
import { ChatsService } from '../services/ChatsService'


class ChatsController {
  async listMessagesByChatId(request: Request, response: Response) {
    
    const { id } = request.params

    const chatsService = new ChatsService()

    try {
      const chats = await chatsService.listAllChatMessages(id)

      return response.status(200).json(chats)
    } catch (error) {
      return response.json({
        message: error.message
      })
    }

  }
}

export { ChatsController }