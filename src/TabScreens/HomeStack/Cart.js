import React from "react";
import {View, StyleSheet, Text, StatusBar, Image} from "react-native";
import {Appbar} from "react-native-paper";
import CustomButton from "../../components/CustomButton";

const Cart = ({navigation}) => {
    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Cart"/>
            </Appbar>
            <View style={styles.container}>
                <Image source={require('../../assets/cartEmpty.png')}/>
                <Text style={styles.label}>Sorry!</Text>
                <Text style={styles.label}>No item in the Cart!</Text>
                <View style={styles.buttonPos}>
                    <CustomButton text={"Go Shopping"} onPress={()=> navigation.navigate("Home")}/>
                </View>
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    label:{
        marginTop: 16,
        fontSize: 24,
        fontFamily: "Montserrat-SemiBold",
    },
    buttonPos: {
        flexDirection: 'row',
        margin: 16,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default Cart
