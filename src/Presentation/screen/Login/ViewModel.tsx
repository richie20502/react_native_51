import React, { useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserCase } from '../../../Domain/useCases/userLocal/SaveUser';
import { useUserLocal } from '../../hooks/useUserLocal';

const LoginViewModel = () => {
    const [errorMessage, seterrorMessage] = useState('');
    const [values, setValues ] = useState({
        email:'',
        password:''
    });
    const { user } = useUserLocal();
    console.log("USUARIO DE SESSION ", JSON.stringify(user));


    const onChange = (property: string, value:any) => {
        setValues({...values,[property]: value});
    }

    const login = async () => {
        if(isValidFrom()){
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log('RESPONSE: ' + JSON.stringify(response));
            if(!response.success){
                seterrorMessage(response.message);
            }else{
                console.log('GUARDA LA DATA');
                await SaveUserCase(response.data);
            }
        }
    }

    const isValidFrom = (): boolean => {
        if(values.email === ''){
            seterrorMessage('Ingresa el correo electronico');
            return false;
        }
        if(values.password === ''){
            seterrorMessage('Ingresa la contrasena');
            return false;
        }

        return true;
    }


    return {
        ...values,
        user,
        onChange,
        login,
        errorMessage
    }
}

export default LoginViewModel;