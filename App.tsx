import { StyleSheet } from "react-native";
import LoginScreen from "./src/Presentation/screen/Login/LoginScreen";
import RegisterScreen from "./src/Presentation/screen/Register/RegisterScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./src/Presentation/screen/ProductsList/ProductList";
import ProfileInfoScreen from './src/Presentation/screen/Profile/Info/ProfileInfo';

export type RootSatckParamList = {
  LoginScreen: undefined;
  Register: undefined;
  ProductList: undefined;
  ProfileInfoScreen: undefined;
};

const Stack = createNativeStackNavigator<RootSatckParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
