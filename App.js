import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./src/AuthScreens/Login";
import Register from "./src/AuthScreens/Register";
import ForgotPass from "./src/AuthScreens/ForgotPass";
import OtpScreen from "./src/AuthScreens/OtpScreen";
import ChangePassword from "./src/AuthScreens/ChangePassword";
import RegisterMoreData from "./src/AuthScreens/RegisterMoreData";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import HomePage from "./src/TabScreens/HomeStack/HomePage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SettingsScreen from "./src/TabScreens/SettingsStack/SettingsScreen";
import {Alert, AsyncStorage, Button, TouchableWithoutFeedback} from "react-native";
import {AuthContext} from "./src/utils/AuthContext";
import {NavigationContainer} from "@react-navigation/native";
import Splash from "./src/Splash";
import Profile from "./src/TabScreens/ProfileStack/Profile";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Orders from "./src/DrawerScreens/Orders";
import 'react-native-gesture-handler';
import EditProfile from "./src/TabScreens/ProfileStack/EditProfile";
import PrivacyPolicy from "./src/TabScreens/SettingsStack/PrivacyPolicy";
import AboutUs from "./src/TabScreens/SettingsStack/AboutUs";
import Cart from "./src/TabScreens/HomeStack/Cart";
import Products from "./src/DrawerScreens/Products";


const AuthStack = createNativeStackNavigator();
const AuthScreens = () => (
    <AuthStack.Navigator
        screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={"Login"}
                          component={Login}/>
        <AuthStack.Screen name={"Register"}
                          component={Register}/>
        <AuthStack.Screen name={"ForgotPassword"}
                          component={ForgotPass}/>
        <AuthStack.Screen name={"OtpScreen"}
                          component={OtpScreen}/>
        <AuthStack.Screen name={"ChangePassword"}
                          component={ChangePassword}/>
        <AuthStack.Screen name={"RegisterMoreData"}
                          component={RegisterMoreData}/>
    </AuthStack.Navigator>
)

const ProfileStack = createNativeStackNavigator()
const ProfileNavigator = () => (
    <ProfileStack.Navigator screenOptions={{headerShown:false}}>
        <ProfileStack.Screen name={"Profile"}
        component={Profile}/>
        <ProfileStack.Screen name={"EditProfile"}
                             component={EditProfile}/>
    </ProfileStack.Navigator>
)

const SettingsStack = createNativeStackNavigator()
const SettingsNavigator = () => (
    <SettingsStack.Navigator screenOptions={{headerShown:false}}>
        <SettingsStack.Screen name={"Settings"}
                              component={SettingsScreen}/>
        <SettingsStack.Screen name={"PrivacyPolicy"}
                              component={PrivacyPolicy}/>
        <SettingsStack.Screen name={"AboutUs"}
                              component={AboutUs}/>
    </SettingsStack.Navigator>
)

const HomeStack = createNativeStackNavigator()
const HomeNavigator = () => (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
        <HomeStack.Screen name={"Home"}
                          component={HomePage}/>
        <HomeStack.Screen name={"Cart"}
                          component={Cart}/>
    </HomeStack.Navigator>
)

const TabNavigation = createMaterialBottomTabNavigator()
const AppTab = () => (
    <TabNavigation.Navigator shifting={true}
                             activeColor='#fff'
                             barStyle={{backgroundColor: '#4077F2'}}>

        <TabNavigation.Screen name={"HomePageStack"}
                              component={HomeNavigator}
                              options={{
                                  tabBarLabel: 'Home',
                                  tabBarIcon: () => (
                                      <MaterialCommunityIcons name="home-circle" color={'#fff'} size={26}/>
                                  )
                              }}/>
        <TabNavigation.Screen name={"ProfileStack"}
                              component={ProfileNavigator}
                              options={{
                                  tabBarLabel: 'Profile',
                                  tabBarIcon: () => (
                                      <MaterialCommunityIcons name="account-circle" color={'#fff'} size={26}/>
                                  )
                              }}/>
        <TabNavigation.Screen name={"SettingsStack"}
                              component={SettingsNavigator}
                              options={{
                                  tabBarLabel: 'Settings',
                                  tabBarIcon: () => (
                                      <MaterialCommunityIcons name="cog" color={'#fff'} size={26}/>
                                  )
                              }}/>
    </TabNavigation.Navigator>
)

const Drawer = createDrawerNavigator();

const MyDrawer = () => (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name={"Home Page"}
                       component={AppTab}/>
        <Drawer.Screen name={"User Profile"}
                       component={ProfileNavigator}/>
        <Drawer.Screen name={"Products"}
                       component={Products}/>
        <Drawer.Screen name={"Orders"}
                       component={Orders}/>

    </Drawer.Navigator>
)

let stateValue, email, password

const getLoginState = async () => {
    try {
        stateValue = await AsyncStorage.getItem('isLogin')
        email = await AsyncStorage.getItem('email')
        password = await AsyncStorage.getItem('password')
    } catch (e) {
        console.log(e)
    }
}


const App = () => {

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    }

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    isLoading: false,
                    userToken: action.token,
                }
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken: action.token,
                    userName: action.id,
                    isLoading: false,
                }
            case 'LOGOUT':
                return {
                    ...prevState,
                    userToken: null,
                    userName: null,
                    isLoading: false,
                }
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                }
        }
    }

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

    const authContext = React.useMemo(() => ({
        signIn: async (userEmail, userPassword) => {
            let userToken
            userToken = null
            if (userEmail === email && userPassword === password) {
                try {
                    userToken = 'true'
                    await AsyncStorage.setItem('isLogin', userToken)
                } catch (e) {
                    console.log(e)
                }
            } else {
                Alert.alert("Error!!", "Email & Password does not match.")
            }
            dispatch({type: 'LOGIN', id: userEmail, token: userToken})

        },
        signOut: async () => {
            try {
                await AsyncStorage.setItem('isLogin', '')
            } catch (e) {
                console.log(e)
            }
            dispatch({type: 'LOGOUT',})
        },
        signUp: async (userEmail) => {
            let userToken
            userToken = null
            try {
                userToken = 'true'
                await AsyncStorage.setItem('isLogin', userToken)
            } catch (e) {
                console.log(e)
            }
            dispatch({type: 'REGISTER', id: userEmail, token: userToken})
        },
    }), [])

    React.useEffect(() => {
        getLoginState().then(() => {
        })
        setTimeout(() => {
            dispatch({type: 'RETRIEVE_TOKEN', token: stateValue})
        }, 2000)
    })


    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.isLoading ? <Splash/> : loginState.userToken !== null ? <MyDrawer/> : <AuthScreens/>}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default App;
