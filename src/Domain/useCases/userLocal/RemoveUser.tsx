import { UserLocalRepositoryImpl } from "../../../Data/repositories/UserLocalRepository";


const { remove } = new UserLocalRepositoryImpl();

export const RemoveUserCase = async () => {
    return await remove();
}