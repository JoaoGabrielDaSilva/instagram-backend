

import { getCustomRepository } from "typeorm"
import { ChatsRepository } from "../repositories/ChatsRepository"
import { UsersChatsRepository } from "../repositories/UsersChatsRepository"
import { UsersRepository } from "../repositories/UsersRepository"

class ChatsService {

  
  async listAllChatMessages(id: string) {


    const chatsRepository = getCustomRepository(ChatsRepository)

    const chat = await chatsRepository.findOne({ relations: ['messages'], where: {id}})

    console.log(chat)

    return {
      chatId: chat.id,
      messages: chat.messages.map(message => {
        
        return {
          messageId: message.id,
          userId: message.user_id,
          text: message.text,
          createdAt: message.created_at
        }

      })
    }
    
  }

}

export { ChatsService }