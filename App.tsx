import { StyleSheet } from 'react-native';
import LoginScreen from './src/Presentation/screen/Login/LoginScreen';
import RegisterScreen from './src/Presentation/screen/Register/RegisterScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileInfoScreen from './src/Presentation/screen/Profile/Info/ProfileInfo';

export type RootSatckParamList = {
  Login: undefined,
  Register: undefined
  Profile: undefined
};

const Stack = createNativeStackNavigator<RootSatckParamList>();

export default function App() {

  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Profile" component={ProfileInfoScreen} />
        </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
