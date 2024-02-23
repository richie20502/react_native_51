import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './LoginScreenStyles';
import { MyColors } from '../../theme/AppTheme';



const LoginScreen: React.FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        console.log('Información:', { username, password });
    }

    const handleRegister = () => {
        navigation.navigate('Register');
        console.log('Registro');
    }

    return (
        <View style={[styles.container, { backgroundColor: MyColors.background }]}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Ingresa tu email"
                autoCapitalize="none"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                placeholder="Ingresa tu contraseña"
            />

            <View style={styles.buttonContainer}>
                {/* Botón de inicio de sesión */}
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.registerContainer}>
                {/* Texto de registro */}
                <Text style={styles.registerText}>¿No tienes cuenta? </Text>
                {/* Enlace de registro */}
                <Text style={styles.link} onPress={handleRegister}>Regístrate</Text>
            </View>
        </View>
    )
}



export default LoginScreen;
