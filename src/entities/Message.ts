import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import {v4 as uuid} from 'uuid'
import { Chat } from "./Chat"
import { User } from "./User"

@Entity('messages')
class Message {

  @PrimaryColumn()
  id: string

  @ManyToOne(() => Chat, chat => chat.messages)
  @JoinColumn({name: 'chat_id'})
  chat: Chat

  @Column()
  chat_id: string

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({name: 'user_id'})
  user: User

  @Column()
  user_id: string
  
  @Column()
  text: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Message }