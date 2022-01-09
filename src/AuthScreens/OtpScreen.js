import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Image, Text, TouchableWithoutFeedback, Alert,} from "react-native";
import OtpInput from "../components/OtpInput";
import CustomButton from "../components/CustomButton";


const OtpScreen = ({navigation, route}) => {

    const [otp] = useState(route.params.otpData)

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')

    const validateFields = () => {
        return !(input1 === '' || input2 === '' || input3 === '' || input4 === '')
    }

    const matchOtp = () => {
        if(validateFields()){
            if(otp === input1+input2+input3+input4){
               navigation.navigate('ChangePassword')
            }else {
                console.log(input1+input2+input3+input4)
            }
        }else {
            Alert.alert("Warning!!","Enter Valid OTP.")
        }
    }


    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#F8FBFF'} barStyle={"dark-content"}/>
            <View style={styles.container}>
                <Image source={require('../assets/logoRegular.png')}
                       style={styles.logo}/>
                <Text style={styles.header}>Enter Your OTP here..</Text>
                <Text style={styles.label}>Your OTP will be valid for 180 Seconds.</Text>
                <OtpInput onTextChange1={text => setInput1(text)}
                          onTextChange2={text => setInput2(text)}
                          onTextChange3={text => setInput3(text)}
                          onTextChange4={text => setInput4(text)}
                />
                <View style={styles.buttonPos}>
                    <CustomButton text={"Next"} onPress={matchOtp}/>
                </View>
                <View style={styles.forgetPassPos}>
                    <TouchableWithoutFeedback onPress={() => Alert.alert("OTP", "Otp has been send.")}>
                        <Text style={styles.linkText}>Resend OTP</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#F8FBFF',
        padding: 16,
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    logo: {
        width: 230,
        height: 130,
        resizeMode: "contain",
    },
    label: {
        fontSize: 16,
        marginTop: 8,
        fontFamily: "Montserrat-SemiBold",
    },
    header: {
        fontSize: 24,
    },
    buttonPos: {
        flexDirection: 'row',
        marginTop: 16,
    },
    otpView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 16,
    },
    linkText: {
        color: '#2680EB',
        textDecorationLine: "underline",
        fontSize: 16,
        marginTop: 8,
    },
    forgetPassPos: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
    },
})

export default OtpScreen;
