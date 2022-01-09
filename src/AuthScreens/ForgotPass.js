import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Image, Text, AsyncStorage, Alert,} from "react-native";
import {TextInput} from "react-native-paper";
import CustomButton from "../components/CustomButton";


const ForgotPass = ({navigation}) => {

    const [email, setEmail] = useState('')

    const validateField = () =>{
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        return !(email === '' || !regex.test(email))
    }

    const matchEmail = async () => {
        try {
            if(validateField()){
                const email_ = await AsyncStorage.getItem('email')
                if (email_ !== ''){
                    if (email_ === email){
                        let otp = (Math.floor(Math.random() * 10000)+10000).toString().substring(1);
                        Alert.alert("OTP.!!",otp)
                        navigation.replace("OtpScreen",{otpData: otp})
                    }else{
                        Alert.alert("Error!!","Email has no Account associated with it.")
                    }
                }
            }else {
                Alert.alert("Error!!","Email is Not Valid.")
            }
        }catch (e){

        }
    }

    return(
        <View style={styles.body}>
            <StatusBar backgroundColor={'#F8FBFF'} barStyle={"dark-content"}/>
            <View style={styles.container}>
                <Image source={require('../assets/logoRegular.png')}
                       style={styles.logo}/>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="Email"
                    mode='outlined'
                    keyboardType='email-address'
                    onChangeText = {text => setEmail(text)}
                />
                <View style={styles.buttonPos}>
                    <CustomButton text={"Next"} onPress={matchEmail}/>
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
    buttonPos: {
        flexDirection: 'row',
        marginTop: 16,
    },
})

export default ForgotPass;
