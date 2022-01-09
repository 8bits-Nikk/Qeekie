import React from 'react';

import {
    Image,
    StatusBar,
    StyleSheet, View,
} from 'react-native';

const Splash = () => {

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#F8FBFF'}/>
            <Image source={require('./assets/logo.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#F8FBFF',
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Splash;
