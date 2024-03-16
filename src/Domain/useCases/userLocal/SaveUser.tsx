import { User } from "../../entities/User";
import { UserLocalRepositoryImpl } from "../../../Data/respositories/UserLocalRepository";

const {save} = new UserLocalRepositoryImpl();

export const SaveUserCase = async(user: User) => {
    return await save(user);
}