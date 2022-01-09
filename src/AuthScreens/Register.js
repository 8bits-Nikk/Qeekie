import React, {useState} from "react";
import {
    View,
    StyleSheet,
    StatusBar,
    Image,
    Text,
    TouchableWithoutFeedback, AsyncStorage, Alert,
} from "react-native";
import {TextInput} from "react-native-paper";
import CustomButton from "../components/CustomButton";


const Register = ({navigation}) => {

    const [name, setName] = useState('');
    const [emailSignUp, setEmailSignUp] = useState('');
    const [mobileNumber, setMobileNumber] = useState();
    const [passwordSignUp, setPasswordSignUp] = useState('');


    const validateFields = () =>{
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        return !(name === '' || !regex.test(emailSignUp) || emailSignUp === '' || mobileNumber.toString().trim().length !== 10 || passwordSignUp.trim().length < 8);
    }

    const addData = async () => {
        try {
            await AsyncStorage.setItem('name',name)
            await AsyncStorage.setItem('email',emailSignUp)
            await AsyncStorage.setItem('mobileNumber',mobileNumber)
            await AsyncStorage.setItem('password',passwordSignUp)
        }catch (e){
            console.log(e);
        }
    }
    const signUpNext = () => {
        if(validateFields()){
            addData().then( ()=>{ navigation.navigate("RegisterMoreData",{Name: name,Email: emailSignUp})})

        }else {
            Alert.alert("Warning!!","Enter Valid Details.")
        }
        return true
    }
    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#F8FBFF'} barStyle={"dark-content"}/>

            <View style={styles.container}>
                <Image source={require('../assets/logoRegular.png')}
                       style={styles.logo}/>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    placeholder="Name"
                    mode='outlined'
                    onChangeText={name => setName(name)}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="Email"
                    mode='outlined'
                    keyboardType='email-address'
                    onChangeText={email => setEmailSignUp(email)}
                />
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                    placeholder="Mobile Number"
                    mode='outlined'
                    keyboardType='phone-pad'
                    maxLength = {10}
                    onChangeText={number => setMobileNumber(number)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder={"Password"}
                    mode='outlined'
                    secureTextEntry
                    onChangeText={password => setPasswordSignUp(password)}
                />

                <View style={styles.buttonPos}>
                    <CustomButton text={"Sign Up"} onPress={signUpNext}/>
                </View>

                <View style={styles.forgetPassPos}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.label}>Already User? </Text>
                        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                            <Text style={styles.linkText}>Login</Text>
                        </TouchableWithoutFeedback>
                    </View>
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
    forgetPassPos: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
    },
    linkText: {
        color: '#2680EB',
        textDecorationLine: "underline",
        fontSize: 16,
        marginTop: 8,
    },
});

export default Register;
