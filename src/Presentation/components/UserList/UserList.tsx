import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserListProps{
    users: User[];
}

const UserList: React.FC<UserListProps> = ({users}) => {

    const renderItem = ({item}:{item:User}) => (
        <View style={styles.item}>
            <Text style={styles.name}>{item.name }</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    );

   
    return (
        <FlatList 
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    name: {
        fontSize: 18,
    },
    email: {
        fontSize: 14,
        color: 'gray',
    },
});


export default UserList;