import React, {useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    Alert,
    AsyncStorage
} from "react-native";
import {Appbar, RadioButton, TextInput} from "react-native-paper";
import ImagePicker from "react-native-image-crop-picker";
import CustomButton from "../../components/CustomButton";

const EditProfile = ({navigation}) =>{

    const [profilePhoto, setProfilePhoto] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNum, setMobileNum] = useState('')
    const [email, setEmail] = useState('')

    const openPicker = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            setProfilePhoto(image.path);
        })
        return true
    }
    const updateProfile = async () =>{
        if (validateFields()){
            try {
                await AsyncStorage.setItem('name', name)
                await AsyncStorage.setItem('email', email)
                await AsyncStorage.setItem('mobileNumber', mobileNum)
                await AsyncStorage.setItem('address', address)
                await AsyncStorage.setItem('gender', gender)
                await AsyncStorage.setItem('profilePhoto', profilePhoto);
                navigation.goBack()
            }catch (e) {
                console.log(e)
            }
        }else {
            Alert.alert("Warning!!", "Enter Valid Details.")
        }
    }
    const validateFields = () =>{
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
        return !(name === '' || email === '' || mobileNum.trim().length !== 10 || address === '' || gender === '' || profilePhoto === '' || !regex.test(email));
    }

    return(
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Edit Profile"/>
            </Appbar>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <TouchableWithoutFeedback onPress={openPicker}>
                        <Image source={profilePhoto === '' ? {uri: "user"} : {uri: profilePhoto}}
                               style={styles.profileImg}/>
                    </TouchableWithoutFeedback>
                    <Text style={styles.label}>Profile Photo</Text>
                </View>
                <View style={styles.container}>
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
                        onChangeText={email => setEmail(email)}
                    />

                    <Text style={styles.label}>Mobile Number</Text>
                    <TextInput
                        placeholder="Mobile Number"
                        mode='outlined'
                        keyboardType='phone-pad'
                        maxLength = {10}
                        onChangeText={number => setMobileNum(number)}
                    />

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
                        <CustomButton text={"Done"} onPress={updateProfile}/>
                    </View>
                </View>
            </ScrollView>
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
    container: {
        margin: 8,
        padding: 8,
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
    label: {
        fontSize: 16,
        marginTop: 8,
        fontFamily: "Montserrat-SemiBold",
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

export default EditProfile
