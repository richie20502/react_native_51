import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Linking  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './LoginScreenStyles';
import { MyColors } from '../../theme/AppTheme';
import LoginViewModel from './ViewModel';
import { StackNavigationProp,StackScreenProps } from '@react-navigation/stack';
import { RootSatckParamList } from '../../../../App';

interface Props extends StackScreenProps<RootSatckParamList, "LoginScreen">{};

const LoginScreen = ({navigation, route}: Props) => {

    const {email, password, errorMessage, onChange, login, user} = LoginViewModel();

    useEffect(() => {
        if(user?.session_token !== null && user?.id !== undefined){
            navigation.navigate('ProfileInfoScreen');
        }
        }, [user]);
    

    return (
        <View style={[styles.container, { backgroundColor: MyColors.background }]}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChange('email', text)}
                value={email}
                placeholder="Ingresa tu email"
                autoCapitalize="none"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChange('password', text)}
                value={password}
                secureTextEntry={true}
                placeholder="Ingresa tu contraseña"
            />

            <View style={styles.buttonContainer}>
                {/* Botón de inicio de sesión */}
                <TouchableOpacity
                    style={[styles.button, styles.loginButton]}
                    onPress={ () => login()}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.registerContainer}>
                {/* Texto de registro */}
                <Text style={styles.registerText}>¿No tienes cuenta? </Text>
                {/* Enlace de registro */}
                <Text style={styles.link} onPress={()=> navigation.navigate('Register') } >Regístrate</Text>
            </View>
        </View>
    )
}



export default LoginScreen;
