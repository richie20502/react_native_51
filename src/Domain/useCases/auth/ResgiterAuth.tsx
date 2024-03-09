import { AuthRepositoryImpl } from "../../../Data/respositories/AuthRepository";
import { User } from "../../entities/User";

const {register} = new AuthRepositoryImpl();


export const RegisterAuthUseCase = async (user: User) => {
    return await register(user);
} 
