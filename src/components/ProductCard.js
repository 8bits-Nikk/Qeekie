import React from "react";
import {View, StyleSheet, Dimensions, Image, Text} from "react-native";

const {width} = Dimensions.get('window')

const ProductCard = ({item}) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardImg}>
                <Image source={item.Img}/>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.productName}>{item.ItemName}</Text>
                <Text style={styles.productPrice}>₹. {item.Price}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: '#fff',
        height: (width / 2) - 20,
        width: (width / 2) - 20,
        elevation: 2,
        borderRadius: 10,
        alignItems: "center",
    },
    cardContent: {
        padding: 8,
        borderWidth: 2,
        borderColor: '#F5F5FF',
        backgroundColor: '#F5F5FF',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        width: (width / 2) - 20,
        justifyContent: 'center',
        height: ((width / 2) - 36) - ((width / 3) - 36),
    },
    cardImg: {
        borderWidth: 2,
        borderColor: '#F5F5FF',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: "center",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        width: (width / 2) - 20,
        height: (width / 3) - 20,
    },
    productName: {
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
    },
    productPrice: {
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
        color: '#FA697C',
    }
})

export default ProductCard
