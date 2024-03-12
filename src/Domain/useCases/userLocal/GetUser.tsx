import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/User";

const { getUser } = new UserLocalRepositoryImpl();

export const GetUserCase = async () => {
    return await getUser();
}