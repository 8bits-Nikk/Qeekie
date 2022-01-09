import React, {useState} from "react";
import {
    StatusBar,
    Text,
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";
import {TextInput} from "react-native-paper";
import CustomButton from "../components/CustomButton";
import {AuthContext} from "../utils/AuthContext";


const Login = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const {signIn} = React.useContext(AuthContext)

    const validateFields = () => {
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        return !(email === '' || !regex.test(email) || password === '');
    }

    const logIn = () =>{
        if(validateFields()){
            signIn(email,password)
        }else {
            Alert.alert("Warning!!","Enter Valid Email or Password.")
        }
        return true;
    }


    return (
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
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder={"Password"}
                    mode='outlined'
                    secureTextEntry
                    onChangeText={password => setPassword(password)}
                />
                <View style={styles.buttonPos}>
                    <CustomButton text={"Login"} onPress={logIn}/>
                </View>
                <View style={styles.forgetPassPos}>
                   <TouchableWithoutFeedback onPress={()=> {navigation.navigate("ForgotPassword")}}>
                       <Text style={styles.linkText}>Forget Password</Text>
                   </TouchableWithoutFeedback>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.label}>New User? </Text>
                        <TouchableWithoutFeedback onPress={()=> {navigation.navigate("Register")}}>
                            <Text style={styles.linkText}>Register</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

        </View>
    );
};

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

export default Login;

