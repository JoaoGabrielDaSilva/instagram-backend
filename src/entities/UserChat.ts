import {  Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import {v4 as uuid} from 'uuid'

import { Chat } from './Chat'
import { User } from './User'

@Entity('users_chats')
class UserChat {

  @PrimaryColumn()
  id: string

  @ManyToOne(() => UserChat, () => User)
  @JoinColumn({name: 'user_id'})
  user: User

  @Column()
  user_id: string

  @ManyToOne(() => UserChat, () => Chat)
  @JoinColumn({name: 'chat_id'})
  chat: Chat

  @Column()
  chat_id: string

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { UserChat }