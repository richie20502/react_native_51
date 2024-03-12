import { User } from '../entities/User';

export interface UserLocalRepository{
    save(user: User): Promise<void>; //cuando se le asigna void no va a retornar nada
    getUser(): Promise<User>; //en la promesa va a retornar un usuario 
    remove(): Promise<void>;
}