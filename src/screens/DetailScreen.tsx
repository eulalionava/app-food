import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Colors } from '../const/Colors';
import { Carrito } from '../data/Carrito';
import { comidaInterface } from '../interfaces/comidaInterface';
import { RootStackParam } from '../navigator/Navigation';

interface Props extends StackScreenProps<RootStackParam,'details'>{}

export const DetailScreen = ({route,navigation}:Props)=> {

    const item:comidaInterface = route.params;

    const agregar = ()=>{
        
    }

    return (
        <SafeAreaView style={{backgroundColor: Colors.white}}>
            <View style={style.header}>
                <Icon name="arrow-back-outline" size={28} onPress={navigation.goBack} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 280,
                    }}
                >
                    <Image source={item.image} style={{height: 220, width: 220}} />
                </View>
                <View style={style.details}>
                    <View
                        style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        }}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', color: Colors.white}}>
                            { item.name }
                        </Text>
                        <View style={ style.iconContainer }>
                            <Icon name="heart-circle-outline" color={Colors.primary} size={25} />
                        </View>
                    </View>
                    <Text style={style.detailsText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries.
                    </Text>
                    <View style={{marginTop: 40, marginBottom: 40}}>
                        <TouchableOpacity 
                            style={style.btn}
                            activeOpacity={0.8}
                            onPress={ agregar }
                        >
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Agregar al carrito</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    details: {
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 60,
      backgroundColor: Colors.primary,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
    },
    iconContainer: {
      backgroundColor: Colors.white,
      height: 50,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
    detailsText: {
      marginTop: 10,
      lineHeight: 22,
      fontSize: 16,
      color: Colors.white,
    },
    btn:{
        marginHorizontal:20,
        backgroundColor:'white',
        height:40,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    }
  });
