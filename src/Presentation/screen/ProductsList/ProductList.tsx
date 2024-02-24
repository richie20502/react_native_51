import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { styles } from './ProductListStyles';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Producto 1', price: '$10'},
        { id: 2, name: 'Producto 2', price: '$20'},
        { id: 3, name: 'Producto 3', price: '$30'},
        { id: 4, name: 'Producto 4', price: '$40'},
        { id: 5, name: 'Producto 5', price: '$50'},
        { id: 6, name: 'Producto 6', price: '$60'},
        { id: 7, name: 'Producto 7', price: '$70'},
        { id: 8, name: 'Producto 8', price: '$80'},
        { id: 9, name: 'Producto 9', price: '$90'},
        { id: 10, name: 'Producto 10', price: '$100'},
        { id: 11, name: 'Producto 11', price: '$110'},
        { id: 12, name: 'Producto 12', price: '$120'},
        { id: 13, name: 'Producto 13', price: '$130'},
        { id: 14, name: 'Producto 14', price: '$140'},
    ];

    // Renderizar elemento individual de la lista
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={require('../../../../assets/500x500-1.png')} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
        </View>
    );
};



export default ProductList;
