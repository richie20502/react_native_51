import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { User } from "../../Domain/entities/User";
import { Api } from "../sources/remote/api/Api";
import { ResponseApi} from "../sources/remote/models/ResponseApi";
import { AxiosError } from "axios";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User) {
        console.log(user);
        try {
            const response = await Api.post<ResponseApi>('/users', user);
            console.log('RESPONSE ', JSON.stringify(response.data));
            return Promise.resolve({error: undefined, result: response.data});
        } catch (error) {
            let e = (error as Error).message;
            console.log('ERROR:', e);
            return Promise.resolve({ error: e, result: undefined});
        }
    }

    async login(email:string, password: string): Promise<ResponseApi>{
        try {
            const response = await Api.post<ResponseApi>('/users/login', {
                email: email,
                password: password
            });
            console.log('RESPONSE ', JSON.stringify(response.data));
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR:', JSON.stringify(e.response?.data));
            const apiError:ResponseApi = JSON.parse(JSON.stringify(e.response?.data)); 
            return Promise.resolve(apiError);
        }
    }

}