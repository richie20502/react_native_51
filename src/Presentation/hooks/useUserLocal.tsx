import React, { useEffect, useState } from 'react';
import { GetUserCase } from '../../Domain/useCases/userLocal/GetUser';
import { User } from '../../Domain/entities/User';

export const useUserLocal = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        getUserSession();
    }, []);

    const getUserSession = async() => {
        const user = await GetUserCase();
        setUser(user);
        console.log('USER SESSION', JSON.stringify(user));
    }
    
    return{
        user
    };
}
