import React from "react";
import {View, StyleSheet, StatusBar, FlatList, Text, Dimensions,} from "react-native";
import {Appbar,} from "react-native-paper";
import {SliderBox} from "react-native-image-slider-box";
import ProductCard from "../../components/ProductCard";

const {width,height} = Dimensions.get('window')

const HomePage = ({navigation}) => {

    const images = [
        require('../../assets/ad1.png'),
        require('../../assets/ad2.png'),
        require('../../assets/ad1.png'),
        require('../../assets/ad2.png'),
    ]
    const products = [
        {
            Img: require('../../assets/Product1.png'),
            ItemName: 'ADIDAS Shoes',
            Price: '4599',
        }, {
            Img: require('../../assets/Product2.png'),
            ItemName: 'NIKE Shoes',
            Price: '3999',
        }, {
            Img: require('../../assets/Product3.png'),
            ItemName: 'ADIDAS Shoes',
            Price: '6999',
        }, {
            Img: require('../../assets/Product4.png'),
            ItemName: 'NMD_R1 Shoes',
            Price: '3499',
        },
        {
            Img: require('../../assets/Product4.png'),
            ItemName: 'NMD_R1 Shoes',
            Price: '3499',
        },
        {
            Img: require('../../assets/Product4.png'),
            ItemName: 'NMD_R1 Shoes',
            Price: '3499',
        },
    ]

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.Action
                    icon="menu"
                    onPress={() => navigation.toggleDrawer()}/>
                <Appbar.Content title="Qeekie"/>
                <Appbar.Action icon="magnify" onPress={() => {
                }}/>
                <Appbar.Action icon="cart" onPress={() => navigation.navigate("Cart")}/>
            </Appbar>
            <View style={styles.container}>
                <View style={styles.slider}>
                    <SliderBox images={images} sliderBoxHeight={(height*0.3)} autoplay={true} circleLoop={true}/>
                </View>
                <View>
                    <Text style={styles.label}>Trending Today</Text>
                    <View style={styles.flatListContainer}>
                        <FlatList data={products}
                                  numColumns={2}
                                  columnWrapperStyle={{justifyContent: 'space-evenly'}}
                                  keyExtractor={((item, index) => index.toString())}
                                  renderItem={({item}) => (
                                      <ProductCard item={item}/>)}
                        />
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    container: {
        height: height,
    },
    slider: {
        marginTop: 3,
        height: height*0.3,
    },
    Header: {
        backgroundColor: '#4077F2',
    },
    label: {
        fontSize: 16,
        margin: 12,
        fontFamily: "Montserrat-SemiBold",
    },
    flatListContainer: {
        height: (height*0.5)-28,
        padding: 3,
    },
});

export default HomePage;
