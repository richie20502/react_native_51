import React, { useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserCase } from '../../../Domain/useCases/userLocal/SaveUser';
import { GetUserCase } from '../../../Domain/useCases/userLocal/GetUser';


const LoginViewModel = () => {
    const [errorMessage, seterrorMessage] = useState('');
    const [values, setValues ] = useState({
        email:'',
        password:''
    });

    const getUserSession = async() => {
        const user = await GetUserCase();
        console.log('USER SESSION', JSON.stringify(user));
    }

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
        onChange,
        login,
        errorMessage
    }
}

export default LoginViewModel;