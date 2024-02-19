import React ,{Component} from 'react';
import {View, Text} from 'react-native';

interface Props{
    age: number;
    name: string;
}

interface State{
    message: string;
}


class ClassComponent extends Component<Props, State>{
    constructor(props: Props){
        super(props) // llamada del contructor de la clase padre
        //se inicializa el estado 
        this.state = {
            message: "mensaje desde el componente clase"
        };
    }

    render(){
        const {age, name} = this.props;
        const {message} = this.state;

        return (
            <View>
                <Text>{message}</Text>
                <Text>hola {name} tu edad : {age}</Text>
            </View>
        );
    }
}

export default ClassComponent;