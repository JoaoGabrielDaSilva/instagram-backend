import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm"
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcrypt'
import { UserChat } from "./UserChat"
import { Chat } from "./Chat"
import { Message } from "./Message"

@Entity('users')
class User {




  @OneToMany(() => Message, message => message.user)
  @JoinColumn({name: 'id'})
  message: Message

  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
  
  @Column()
  profile_picture: string

  @Column()
  socket_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10)
  }

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { User }