import React from "react";
import {View, StyleSheet, Image, Text,} from "react-native";


const OrderCard = ({item}) => {

    return(
        <View style={styles.card}>
            <View style={styles.ImgContainer}>
                <Image source={item.Img}
                       style={styles.Img}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.labelHeader}>{item.ItemName}</Text>
                <View style={styles.rowFlex}>
                    <Text style={styles.label}>Quantity :</Text>
                    <Text style={styles.label}>{item.Quantity}</Text>
                </View>
                <View style={styles.rowFlex}>
                    <Text style={styles.label}>Price :</Text>
                    <Text style={[styles.label,{color: '#FA697C'}]}>₹ {item.Price}</Text>
                </View>
                <View style={styles.rowFlex}>
                    <Text style={styles.label}>Delivery Status :</Text>
                    <Text style={[styles.label,{color: item.DeliveryStatus === 'Cancelled'? '#FA697C': '#2680EB'}]}>{item.DeliveryStatus}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#aaa',
        margin: 8,
        padding: 8,
    },
    ImgContainer: {
        padding: 16,
    },
    Img: {
        height: 100,
        width: 100,
        resizeMode: "contain",
    },
    textContainer: {
        padding:8,
    },
    labelHeader: {
        fontSize: 22,
        fontFamily: "Montserrat-SemiBold",
    },
    label: {
        fontSize: 15,
        fontFamily: "Montserrat-SemiBold",
        padding: 3,
    },
    rowFlex: {
        flexDirection: 'row',
    },
})

export default OrderCard
