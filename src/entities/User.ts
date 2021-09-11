import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"
import {v4 as uuid} from 'uuid'

@Entity('users')
class User {

  @PrimaryColumn()
  usr_id: string

  @Column()
  usr_name: string

  @Column()
  usr_email: string

  @Column()
  usr_password: string
  
  @Column()
  usr_profile_picture: string

  @Column()
  usr_socket_id: string

  @CreateDateColumn()
  usr_created_at: Date

  @UpdateDateColumn()
  usr_updated_at: Date

  constructor() {
    if (!this.usr_id) {
      this.usr_id = uuid()
    }
  }
}

export { User }