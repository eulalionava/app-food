import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../const/Colors'

export const Perfil = ()=> {
    return (
        <View style={styles.header}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 28}}>Hola,</Text>
                    <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                        Eulalio Nava
                    </Text>
                </View>
                <Text style={{marginTop: 5, fontSize: 22, color: Colors.grey}}>
                    Que quieres el día de hoy ?
                </Text>
            </View>
            <Image
                source={require('../images/galax.jpg')}
                style={{height: 50, width: 50, borderRadius: 25}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});