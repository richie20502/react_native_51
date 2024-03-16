import React,{useState} from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserCase } from '../../../Domain/useCases/userLocal/SaveUser';
import { useUserLocal } from '../../hooks/useUserLocal';


const LoginViewModel = () => {
    const [errorMessage, seterrorMessage] = useState("");
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
        const response = await LoginAuthUseCase(values.email, values.password);
        console.log('RESPONSE: ' + JSON.stringify(response));
        if(!response.success){
                seterrorMessage(response.message);
        }else{
            console.log("GUARDA LA DATA EN SESION");
            await SaveUserCase(response.data);
        }
    }

    return {
        ...values,
        onChange,
        login,
        user,
        errorMessage
    }
}

export default LoginViewModel
