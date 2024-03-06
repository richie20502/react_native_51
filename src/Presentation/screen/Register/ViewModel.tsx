import React, {useState} from 'react';
import { Api } from '../../../Data/sources/remote/api/Api';

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
        try {
            const response = await Api.post('/users', values);
            //console.log(response.data);
        } catch (error) {
            console.error('Error al crear usuario:', error);
        }
    }

    return {
        ...values,
        onChange,
        register
    }

}

export default RegisterViewModel;