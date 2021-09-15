import { EntityRepository, Repository } from "typeorm";
import { UserChat } from "../entities/UserChat";



@EntityRepository(UserChat)
class UsersChatsRepository extends Repository<UserChat> {

}

export { UsersChatsRepository }
