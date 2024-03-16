import { User } from "../../Domain/entities/User";
import { LocalStorage } from "../sources/local/LocalStorage";
import { UserLocalRepository } from "../../Domain/repositories/UserLocalRepository";

export class UserLocalRepositoryImpl implements  UserLocalRepository{
    async save(user: User): Promise<void>{
        const {save} = LocalStorage();
        await save('user', JSON.stringify(user));
    }

    async getUser(): Promise<User>{
        const { getItem } = LocalStorage();
        const data = await getItem('user');
        const user: User = JSON.parse(data as any);
        return user;
    }
}