import { UserLocalRepository } from "../../repositories/UserLocalRepository";
import { User } from "../../entities/User";
import { UserLocalRepositoryImpl } from "../../../Data/respositories/UserLocalRepository";

const {getUser} = new UserLocalRepositoryImpl();

export const GetUserCase = async() => {
    return await getUser();
}