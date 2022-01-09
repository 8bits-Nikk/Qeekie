import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Text, Image, AsyncStorage, TouchableWithoutFeedback, Alert,} from "react-native";
import {TextInput, RadioButton,} from "react-native-paper";
import ImagePicker from "react-native-image-crop-picker";
import {AuthContext} from "../utils/AuthContext";
import CustomButton from "../components/CustomButton";
const RegisterMoreData = ({route}) => {

    const {signUp} = React.useContext(AuthContext)

    const name = route.params.Name
    const email = route.params.Email
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');

    const addData = async () => {
        try {
            if (validateFields()){
                await AsyncStorage.setItem('address', address);
                await AsyncStorage.setItem('gender', gender);
                await AsyncStorage.setItem('profilePhoto', profilePhoto);
                signUp(email)
            }else {
                Alert.alert("Warning!!", "Enter Valid Details.")
            }

        } catch (e) {
            console.log(e);
        }
    }

    const validateFields = () => {
        return !(address.trim() === '' || gender.trim() === '' || profilePhoto.trim() === '');
    }
    const openPicker = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            setProfilePhoto(image.path);
        });
        return false;
    };

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#F8FBFF'} barStyle={"dark-content"}/>
            <View style={styles.container}>
                <Image source={require('../assets/logoRegular.png')}
                       style={styles.logo}/>
                <View style={styles.nameContainer}>
                    <Text style={styles.header}>Hi, </Text>
                    <Text style={styles.headerName}>{name}</Text>
                </View>
                <Text style={styles.label}>We are setting up a few things for you..</Text>
                <View style={styles.profileContainer}>
                    <TouchableWithoutFeedback onPress={openPicker}>
                        <Image source={profilePhoto === '' ? {uri: "user"} : {uri: profilePhoto}}
                               style={styles.profileImg}/>
                    </TouchableWithoutFeedback>
                    <Text style={styles.label}>Profile Photo</Text>
                </View>
                <View>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        placeholder="Address"
                        mode='outlined'
                        multiline
                        onChangeText={text => setAddress(text)}
                    />
                    <Text style={styles.label}>Gender</Text>
                    <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                        <View style={styles.radioButton}>
                            <Text>Male</Text>
                            <RadioButton value="Male"/>
                        </View>
                        <View style={styles.radioButton}>
                            <Text>Female</Text>
                            <RadioButton value="Female"/>
                        </View>
                    </RadioButton.Group>
                    <View style={styles.buttonPos}>
                        <CustomButton text={"Save"} onPress={addData}/>
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
    },
    logo: {
        width: 150,
        height: 100,
        resizeMode: "contain",
    },
    nameContainer: {
        flexDirection: "row",
    },
    header: {
        fontSize: 32,
        fontFamily: "Montserrat-Bold"
    },
    headerName: {
        fontSize: 32,
        fontFamily: "Montserrat-Bold",
        color: "#2680EB",
    },
    label: {
        fontSize: 16,
        marginTop: 8,
        fontFamily: "Montserrat-SemiBold",
    },
    profileContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    profileImg: {
        height: 120,
        width: 120,
        borderRadius: 60,
        resizeMode: "stretch",
        margin: 16,
        marginTop: 32,
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        marginStart: 16,
        marginTop: 6,
    },
    buttonPos: {
        flexDirection: 'row',
        marginTop: 16,
    },
})

export default RegisterMoreData;
