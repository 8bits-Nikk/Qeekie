import React, {useState} from "react";
import {View, StyleSheet, Text, StatusBar, Image, Alert, AsyncStorage} from "react-native";
import {TextInput} from "react-native-paper";
import CustomButton from "../components/CustomButton";


const ChangePassword = ({navigation}) => {

    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const validateFields = () =>{
        return !(password.trim().length < 8 || confirmPassword.trim().length < 8 || password.trim() !== confirmPassword.trim());
    }

    const changePassword = async () => {
        try {
            if(validateFields()){
                await AsyncStorage.setItem('password',password)
                navigation.reset({
                    index : 0,
                    routes: [{
                        name: 'Login'
                    }]
                })
            }else {
                Alert.alert("Warning","Use Valid Password.")
            }
        }catch (e) {
            console.log(e)
        }
    }


    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#F8FBFF'} barStyle={"dark-content"}/>
            <View style={styles.container}>
                <Image source={require('../assets/logoRegular.png')}
                       style={styles.logo}/>
                <Text style={styles.label}>New Password</Text>
                <TextInput
                    placeholder={"Password"}
                    mode='outlined'
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    placeholder={"Confirm Password"}
                    mode='outlined'
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry
                />
                <View style={styles.buttonPos}>
                    <CustomButton text={"Submit"} onPress={changePassword}/>
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
    buttonPos: {
        flexDirection: 'row',
        marginTop: 16,
    },
    label: {
        fontSize: 16,
        marginTop: 8,
        fontFamily: "Montserrat-SemiBold",
    },
})

export default ChangePassword;
