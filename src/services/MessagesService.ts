import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message"
import { MessagesRepository } from "../repositories/MessagesRepository"

class MessagesService {

  private messagesRepository: Repository<Message>

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository)
  }

  async listAllMessages(id: string) {


    const messages = await this.messagesRepository.find({ relations: ['chat'], where:  {id } })
    
    if (messages.length === 0) {
      throw new Error("Não foram encontradas mensagens")
    }

    return messages.map(message => {
      return {
        messageId: message.id,
        chatId: message.chat,
        text: message.text
      }
    })
  }

}

export { MessagesService }