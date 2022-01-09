import React from "react";
import {View, StyleSheet, StatusBar} from "react-native";
import {Appbar} from "react-native-paper";
import WebView from "react-native-webview";

const webPage = '<body>\n' +
    '\n' +
    '<h1>About Us</h1>\n' +
    '<lr>\n' +
    '    <li>This is Page About Us</li>\n' +
    '    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi. Diam sit amet nisl suscipit. Orci a scelerisque purus semper eget duis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Velit dignissim sodales ut eu sem integer vitae. Suspendisse in est ante in. In ante metus dictum at tempor commodo ullamcorper a. Tortor aliquam nulla facilisi cras fermentum. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Sed vulputate mi sit amet mauris. Enim diam vulputate ut pharetra sit. Lorem dolor sed viverra ipsum nunc aliquet.</li>\n' +
    '    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi. Diam sit amet nisl suscipit. Orci a scelerisque purus semper eget duis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Velit dignissim sodales ut eu sem integer vitae. Suspendisse in est ante in. In ante metus dictum at tempor commodo ullamcorper a. Tortor aliquam nulla facilisi cras fermentum. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Sed vulputate mi sit amet mauris. Enim diam vulputate ut pharetra sit. Lorem dolor sed viverra ipsum nunc aliquet.</li>\n' +
    '</lr>\n' +
    '\n' +
    '</body>'

const AboutUs = ({navigation}) =>{
    return(
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="About Us"/>
            </Appbar>
            <WebView
                source={{ html: webPage}}
                originWhitelist={['*']}
                javaScriptEnabled={true}
                domStorageEnabled={true}
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

export default AboutUs
