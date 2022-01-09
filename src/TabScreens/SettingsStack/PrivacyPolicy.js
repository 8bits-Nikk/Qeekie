import React from "react";
import {View, StyleSheet, StatusBar} from "react-native";
import {Appbar} from "react-native-paper";
import WebView from "react-native-webview";

const PrivacyPolicy = ({navigation}) =>{

    return(
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Privacy Policy"/>
            </Appbar>
            <WebView
                originWhitelist={['*']}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri: 'https://www.amazon.in/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ'}}
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

export default PrivacyPolicy
