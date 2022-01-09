import React, {useRef,} from "react";
import {View, StyleSheet, Keyboard, } from "react-native";
import {TextInput} from "react-native-paper";


const OtpInput = (props) => {

    const textRef_1 = useRef();
    const textRef_2 = useRef();
    const textRef_3 = useRef();

    return (
        <View style={styles.container} >
            <TextInput
                style = {styles.input}
                mode={"outlined"}
                keyboardType='numeric'
                maxLength={1}
                returnKeyType={"next"}
                blurOnSubmit={false}
                onChangeText={props.onTextChange1}
                onSubmitEditing={() => {
                    textRef_1.current.focus()
                }}/>
            <TextInput
                style = {styles.input}
                mode={"outlined"}
                keyboardType='numeric'
                maxLength={1}
                returnKeyType={"next"}
                ref={textRef_1}
                blurOnSubmit={false}
                onChangeText={props.onTextChange2}
                onSubmitEditing={() => {
                    textRef_2.current.focus()
                }}
            />
            <TextInput
                style = {styles.input}
                mode={"outlined"}
                keyboardType='numeric'
                maxLength={1}
                returnKeyType={"next"}
                ref={textRef_2}
                blurOnSubmit={false}
                onChangeText={props.onTextChange3}
                onSubmitEditing={() => {
                    textRef_3.current.focus();
                }}
            />
            <TextInput
                style = {styles.input}
                mode={"outlined"}
                keyboardType='numeric'
                maxLength={1}
                ref={textRef_3}
                onChangeText={props.onTextChange4}
                onSubmitEditing={()=> Keyboard.dismiss
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 6,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16,
    },
    input: {
        width: 60,
        justifyContent: "center",
        textAlign: "center",
        fontSize: 24,
    }
});

export default OtpInput;
