import React, { useState } from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth'; 


const LoginViewModel = () => {
    const [errorMessage, seterrorMessage] = useState('');
    const [values, setValues ] = useState({
        email:'',
        password:''
    });

    const onChange = (property: string, value:any) => {
        setValues({...values,[property]: value});
    }

    const login = async () => {
        if(isValidFrom()){
            const response = await LoginAuthUseCase(values.email, values.password);
            console.log('RESPONSE: ' + JSON.stringify(response));
            if(!response.success){
                seterrorMessage(response.message);
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