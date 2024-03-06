import React, {useState} from 'react';
import { Api } from '../../../Data/sources/remote/api/Api';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {

    const [values, setValues] = useState({
        name:'',
        apellidoPaterno:'',
        apellidoMaterno:'',
        email:'',
        password:''
    });

    const onChange = (property: string, value:any) => {
        setValues({...values, [property]: value})
    }

    const register = async () =>{
        const {result, error} = await RegisterAuthUseCase(values);
        console.log('RESULT: '+ JSON.stringify(result));
        console.log('ERROR: '+ error);
    }

    return {
        ...values,
        onChange,
        register
    }

}

export default RegisterViewModel;