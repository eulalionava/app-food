import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
interface Props{
    onPress:()=>void,
    title:string,
    color:string
}

export const Boton = ({onPress,title,color}:Props)=> {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{...style.btnContainer,backgroundColor:color}}>
                <Text style={style.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    title: {
        color: Colors.white, 
        fontWeight: 'bold', 
        fontSize: 18
    },

    btnContainer: {
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });