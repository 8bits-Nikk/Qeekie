import React from "react";
import {View, StyleSheet, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import {AuthContext} from "../../utils/AuthContext";
import CustomButton from "../../components/CustomButton";
import {Appbar} from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const SettingsScreen = ({navigation}) =>{

    const {signOut} = React.useContext(AuthContext)
    return(
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Settings"/>
            </Appbar>
           <TouchableOpacity onPress={()=> navigation.navigate("AboutUs")}>
               <View style={styles.info}>
                   <MaterialCommunityIcons name={'information'} size={30}/>
                   <Text style={styles.label}>   About Us</Text>
                   <MaterialCommunityIcons name={'arrow-right'} size={30} allowFontScaling={true} style={styles.arrow}/>
               </View>
           </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate("PrivacyPolicy")}>
                <View style={styles.info}>
                    <MaterialCommunityIcons name={'fingerprint'} size={30}/>
                    <Text style={styles.label}>   Privacy Policy</Text>
                    <MaterialCommunityIcons name={'arrow-right'} size={30} allowFontScaling={true} style={styles.arrow}/>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={signOut}>
                <View style={styles.logout}>
                    <MaterialCommunityIcons name={'logout'} size={30}/>
                    <Text style={styles.label}>   Log Out</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    buttonPos: {
        flexDirection: 'row',
        marginTop: 16,
    },
    Header: {
        backgroundColor: '#4077F2',
    },
    info: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: "center",
        height: 60,
        padding: 8,
        paddingStart: 16,
        borderRadius: 10,
        margin: 8,
    },
    logout:{
        position: "absolute",
        bottom: 8,
        flexDirection: 'row',
        backgroundColor: '#FFAFBA',
        alignItems: "center",
        height: 60,
        width: '97%',
        padding: 8,
        paddingStart: 16,
        borderRadius: 10,
        margin: 8,
    },
    label: {
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
    },
    arrow: {
        position: "absolute",
        end: 16,
    },
})

export default SettingsScreen
