import axios from 'axios';
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { styles } from "./RegisterScreenStyles";
import RegisterViewModel from './ViewModel';

const RegisterScreen = () => {
    const {name, password, apellidoPaterno, apellidoMaterno, email, onChange, register } = RegisterViewModel();
    


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la pantalla de registro</Text>
        <TextInput
        placeholder="Nombre"
        value= {name}
        onChangeText={ (text) => onChange('name', text)}
        style={styles.input}
        />

        <TextInput
        placeholder="Apellido Paterno"
        value={apellidoPaterno}
        onChangeText={ (text) => onChange('apellidoPaterno', text)}
        style={styles.input}
        />

        <TextInput
        placeholder="Apellido Materno"
        value={apellidoMaterno}
        onChangeText={ (text) => onChange('apellidoMaterno', text)}
        style={styles.input}
        />

        <TextInput
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={ (text) => onChange('email', text)}
        style={styles.input}
        />

        <TextInput
         placeholder="Contraseña"
        value= {password}
        onChangeText={ (text) => onChange('password', text)}
        style={styles.input}
        secureTextEntry={true}
        />

        <Button title='Guardar' onPress={  () => register()}/>
    </View>
  )
}

export default RegisterScreen
