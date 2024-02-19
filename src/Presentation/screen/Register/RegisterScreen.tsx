import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {

      axios.post('http://169.254.184.229:3000/api/51', {
        username: username,
        password: password
      }).then(response => {
        console.log('then', response);
      }).catch((error) => {
        console.log('error', error);
      });

    }


  return (
    <View>
        <Text> Bienvenido a la pantalla de registro ..</Text>
        <TextInput
        placeholder='nombre usuario'
        value= {username}
        onChangeText={setUsername}/>

        <TextInput
        placeholder='password'
        value= {password}
        onChangeText={setPassword}/>

        <Button title='Guardar' onPress={handleRegister}/>
    </View>
  )
}

export default RegisterScreen
