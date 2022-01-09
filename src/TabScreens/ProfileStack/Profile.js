import React, {useEffect, useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    Image,
    AsyncStorage,
    ActivityIndicator, ScrollView, RefreshControl
} from "react-native";
import {Appbar} from "react-native-paper";
import CustomButton from "../../components/CustomButton";

let Name, Email, MobileNum, Address, ProfilePhoto, Gender

const getAllData = async () => {
    try {
        Name = await AsyncStorage.getItem('name')
        Email = await AsyncStorage.getItem('email')
        MobileNum = await AsyncStorage.getItem('mobileNumber')
        Address = await AsyncStorage.getItem('address')
        ProfilePhoto = await AsyncStorage.getItem('profilePhoto')
        Gender = await AsyncStorage.getItem('gender')
    } catch (e) {
        console.log(e)
    }
}


const Profile = ({navigation}) => {

    const [isLoading, setIsLoading] = useState(true)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [gender, setGender] = useState('');

    const setData = () => {
        setName(Name)
        setEmail(Email)
        setAddress(Address)
        setGender(Gender)
        setIsLoading(false)
        setMobileNumber(MobileNum)
        setProfilePhoto(ProfilePhoto)
    }

    useEffect(() => {
        getAllData().then(()=>{setTimeout(() => {
            setData()
        }, 500)})
    }, [])

    const onRefresh = React.useCallback(() => {
        getAllData().then(()=>{setIsLoading(true)
            setTimeout(() => {
                setData()
                setIsLoading(false)
            }, 500)})

    }, []);

    return (
        <View style={styles.body}>
            <StatusBar backgroundColor={'#4077F2'}/>
            <Appbar style={styles.Header}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}/>
                <Appbar.Content title="Profile"/>
                <Appbar.Action icon="cart" onPress={() => navigation.navigate("Cart")}/>
            </Appbar>
            {isLoading ?
                <View style={styles.loading}>
                    <ActivityIndicator size={'large'}/>
                </View>
                :
                <ScrollView style={styles.body_}
                            refreshControl={
                                <RefreshControl
                                    refreshing={isLoading}
                                    onRefresh={onRefresh}
                                />
                            }>
                    <View style={styles.profileContainer}>
                        <Image source={profilePhoto === '' ? {uri: "user"} : {uri: profilePhoto}}
                               style={styles.profileImg}/>
                        <Text style={styles.labelName}>{name}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.label}>Email: {email}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.label}>Gender: {gender}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.label}>Address: {address}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.label}>Mobile Number: {mobileNumber}</Text>
                    </View>
                    <View style={styles.buttonPos}>
                        <CustomButton text={"Edit Profile"} onPress={() => {
                            navigation.navigate("EditProfile")
                        }}/>
                    </View>
                </ScrollView>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    body_: {
        flex: 1,
        margin: 8,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Header: {
        backgroundColor: '#4077F2',
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
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
    },
    labelName: {
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
        padding: 8,
    },
    buttonPos: {
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 16,
    },
    info: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        height: 60,
        padding: 8,
        paddingStart: 16,
        borderRadius: 10,
        margin: 8,
    },
})

export default Profile
