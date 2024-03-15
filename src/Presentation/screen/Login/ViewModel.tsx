import React,{useState} from 'react';
import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';


const LoginViewModel = () => {
    const [errorMessage, seterrorMessage] = useState("");
    const [values, setValues ] = useState({
                email:'',
                password:''
                });

    const onChange = (property: string, value:any) => {
        setValues({...values,[property]: value});
    }

    const login = async () => {
        const response = await LoginAuthUseCase(values.email, values.password);
        console.log('RESPONSE: ' + JSON.stringify(response));
        if(!response.success){
                seterrorMessage(response.message);
            }
    }

    return {
        ...values,
        onChange,
        login,
        errorMessage
    }
}

export default LoginViewModel
