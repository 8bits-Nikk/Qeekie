import React from "react";
import {View, StyleSheet, StatusBar, FlatList,} from "react-native";
import {Appbar} from "react-native-paper";
import OrderCard from "../components/OrderCard";

const pastOrder = [
    {
        Img: require('../assets/Product1.png'),
        ItemName: 'ADIDAS Shoes',
        Price: '4599',
        Quantity: 1,
        DeliveryStatus: 'Cancelled'
    },
    {
        Img: require('../assets/Product2.png'),
        ItemName: 'NIKE Shoes',
        Price: '2999',
        Quantity: 1,
        DeliveryStatus: 'Arriving'
    },
]

const Orders = ({navigation}) => {
    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="My Orders"/>
                <Appbar.Action icon="cart" onPress={() => navigation.navigate("Cart")}/>
            </Appbar>
            <View>
                <FlatList data={pastOrder} renderItem={({item})=>(
                    <OrderCard item={item}/>
                )}/>
            </View>

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

export default Orders
