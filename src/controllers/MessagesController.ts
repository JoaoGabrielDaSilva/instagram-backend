import {Request, Response } from 'express'
import { MessagesService } from '../services/MessagesService'


class MessagesController {
  async index(request: Request, response: Response) {
    
    const { id } = request.params

    const messagesService = new MessagesService()

    try {
      const messages = await messagesService.listAllMessages(id)

      return response.status(200).json(messages)
    } catch (error) {
      return response.json({
        message: error.message
      })
    }

  }
}

export { MessagesController }