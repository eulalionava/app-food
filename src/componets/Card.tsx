import { CommonActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Colors } from '../const/Colors'
import { comidaInterface } from '../interfaces/comidaInterface';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

interface Props{
    food:comidaInterface
}

export const Card = ({food}:Props)=> {
    const navigation =  useNavigation();
    return (
        <TouchableHighlight
            underlayColor={Colors.white}
            activeOpacity={0.9}
            onPress={() => navigation.dispatch(CommonActions.navigate('details',food)) }
        >
            <View style={styles.card}>
                <View style={{alignItems: 'center', top: -40}}>
                    <Image source={food.image} style={{height: 120, width: 120}} />
                </View>
                <View style={{marginHorizontal: 20}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
                    <Text style={{fontSize: 14, color: Colors.grey, marginTop: 2}}>
                    {food.ingredients}
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginHorizontal: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {food.price}
                    </Text>
                    <View style={styles.addToCartBtn}>
                    <Icon name="add-outline" size={20} color={Colors.white} />
                    </View>
                </View>
            </View>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: Colors.white,
    },
    addToCartBtn: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

