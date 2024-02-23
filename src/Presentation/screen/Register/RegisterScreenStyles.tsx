import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: MyColors.background, // Color de fondo del contenedor
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: MyColors.primary, // Color del título
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});