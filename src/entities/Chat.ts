import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm"
import {v4 as uuid} from 'uuid'
import { Message } from "./Message"
import { UserChat } from "./UserChat"

@Entity('chats')
class Chat {

  @PrimaryColumn()
  id: string

  @OneToMany(() => Message, message => message.chat)
  messages: Message[]

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Chat }