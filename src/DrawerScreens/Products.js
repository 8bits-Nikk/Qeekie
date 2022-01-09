import React from "react";
import {View, StyleSheet, FlatList, StatusBar} from "react-native";
import ProductCard from "../components/ProductCard";
import {Appbar} from "react-native-paper";

const products = [
    {
        Img: require('../assets/Product1.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '4599',
    },
    {
        Img: require('../assets/Product2.png'),
        ItemName: 'NIKE Shoes',
        Price: '2999',
    },
    {
        Img: require('../assets/Product3.png'),
        ItemName: 'PUMA Shoes',
        Price: '3499',
    },
    {
        Img: require('../assets/Product4.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '6999',
    },
    {
        Img: require('../assets/Product5.png'),
        ItemName: 'PUMA Shoes',
        Price: '4599',
    },
    {
        Img: require('../assets/Product6.png'),
        ItemName: 'REEBOK Shoes',
        Price: '4599',
    },
    {
        Img: require('../assets/Product7.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '5999',
    },
    {
        Img: require('../assets/Product8.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '4999',
    },{
        Img: require('../assets/Product1.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '4599',
    },
    {
        Img: require('../assets/Product2.png'),
        ItemName: 'NIKE Shoes',
        Price: '2999',
    },
    {
        Img: require('../assets/Product3.png'),
        ItemName: 'PUMA Shoes',
        Price: '3499',
    },
    {
        Img: require('../assets/Product4.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '6999',
    },
    {
        Img: require('../assets/Product5.png'),
        ItemName: 'PUMA Shoes',
        Price: '4599',
    },
    {
        Img: require('../assets/Product6.png'),
        ItemName: 'REEBOK Shoes',
        Price: '4599',
    },
    {
        Img: require('../assets/Product7.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '5999',
    },
    {
        Img: require('../assets/Product8.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '4999',
    },
]

const Products = ({navigation}) =>{
    return(
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Privacy Policy"/>
            </Appbar>
            <FlatList data={products}
                      numColumns={2}
                      columnWrapperStyle={{justifyContent: 'space-evenly'}}
                      keyExtractor={((item, index) => index.toString())}
                      renderItem={({item}) => (
                          <ProductCard item={item}/>)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    Header: {
        backgroundColor: '#4077F2',
    },

})

export default Products
