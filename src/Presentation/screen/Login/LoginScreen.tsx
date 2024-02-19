import React, { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { styles } from './LoginScreenStyles';
import { useNavigation } from '@react-navigation/native';


const LoginScreen: React.FunctionComponent =  () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        console.log('informacion :', {username, password} );
    }

    const handleRegister = () => {
        navigation.navigate('Register');
        console.log('register');
    }
    //kebab case  handle-login
    //sneake case handle_login
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="aqui va tu email"/>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry= {true}
                placeholder="ingresa password"/>
            
            <Button title ="Login" onPress={handleLogin}/>
            <Button title= 'Registrate' onPress={handleRegister}/>
        </View>
    )
    
}




export default LoginScreen;