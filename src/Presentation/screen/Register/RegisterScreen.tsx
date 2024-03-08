import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { styles } from "./RegisterScreenStyles"

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [email, setEmail] = useState('');
    

    const handleRegister = () => {

      axios.post('http://192.168.1.15:3000/api/users', {
        name: name,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        email: email,
        password: password
      }).then(response => {
        console.log('then', response);
      }).catch((error) => {
        console.log('error', error);
      });

    }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la pantalla de registro</Text>
        <TextInput
        placeholder="Nombre"
        value= {name}
        onChangeText={setName}
        style={styles.input}
        />


        <TextInput
        placeholder="Apellido Paterno"
        value={apellidoPaterno}
        onChangeText={setApellidoPaterno}
        style={styles.input}
        />

        <TextInput
        placeholder="Apellido Materno"
        value={apellidoMaterno}
        onChangeText={setApellidoMaterno}
        style={styles.input}
        />

        <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        />

        <TextInput
         placeholder="Contraseña"
        value= {password}
        onChangeText={setPassword}
        style={styles.input}/>

        <Button title='Guardar' onPress={handleRegister}/>
    </View>
  )
}

export default RegisterScreen
