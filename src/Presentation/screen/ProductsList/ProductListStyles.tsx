import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    item: {
        backgroundColor: MyColors.primary,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 8,
        alignItems: 'center',
        flex: 1, // Para que los elementos se ajusten en tamaño
        borderRadius: 10, // Agregar bordes redondeados
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
    },
    price: {
        fontSize: 16,
        color: '#333',
        marginTop: 5,
    },
});