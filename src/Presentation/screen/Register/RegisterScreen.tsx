import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "./RegisterScreenStyles";
import { MyColors } from "../../theme/AppTheme";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");

  const handleRegister = () => {
    axios
      .post("http://169.254.184.229:3000/api/51", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log("then", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la pantalla de registro</Text>
      <TextInput
        placeholder="Nombre"
        value={username}
        onChangeText={setUsername}
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
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button title="Guardar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
