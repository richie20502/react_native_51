import React from 'react';
import {View, Text} from 'react-native';


interface Props {
    name: string;
    ap_pat: string;
}

const FunctionalComponent: React.FunctionComponent<Props> = ({name, ap_pat}) => {
    return (
        <View>
            <Text> hola como estas {name}   {ap_pat}</Text>
        </View>
    );
};



export default FunctionalComponent;