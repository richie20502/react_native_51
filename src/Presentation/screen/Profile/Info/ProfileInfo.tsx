import React from 'react'
import { View, Button } from 'react-native'
import ProfileInfoViewModel from './ViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { RootSatckParamList } from '../../../../../App';

interface Props extends StackScreenProps<RootSatckParamList, 'ProfileInfoScreen'>{};

const ProfileInfoScreen = ({navigation, route}:Props) => {

    const {removeSession } = ProfileInfoViewModel();
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center'}}>
            <Button 
                onPress={() => {
                    removeSession();
                    navigation.navigate('LoginScreen');
                }}
                title='Cerrar Sesion'
            />
        </View>
    )
}

export default ProfileInfoScreen;