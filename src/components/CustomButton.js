import React from "react";
import {Pressable, Text,StyleSheet,} from "react-native";


const CustomButton = (props) =>{
    return(
      <Pressable style={({pressed})=>[{backgroundColor : pressed? '#e76172':'#FA697C'},
          {elevation: pressed? 1 : 6},
          styles.button]}
      onPress={props.onPress}>
          <Text style={styles.text}>{props.text}</Text>
      </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        height: 55,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: '#fff',
        fontFamily: 'Quicksand-Bold',
        fontSize: 18,
    },
})

export default CustomButton;