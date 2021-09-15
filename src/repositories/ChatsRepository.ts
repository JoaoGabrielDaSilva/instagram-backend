import { EntityRepository, Repository } from "typeorm";
import { Chat } from "../entities/Chat";



@EntityRepository(Chat)
class ChatsRepository extends Repository<Chat> {

}

export { ChatsRepository }
