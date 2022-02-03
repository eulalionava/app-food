import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Boton } from '../componets/Boton'

export const InicioScreen = ()=> {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
            <View style={{height: 400}}>
                <Image
                    style={{
                        width: '100%',
                        resizeMode: 'contain',
                        top: -150,
                    }}
                    source={require('../images/onboardImage.png')}
                />
            </View>
            <View style={style.textContainer}>
                <View>
                    <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
                        Comida deliciosa
                    </Text>
                    <Text
                        style={{
                        marginTop: 20,
                        fontSize: 18,
                        textAlign: 'center',
                        color: Colors.grey,
                        }}>
                        te ayudamos a encontrar comida deliciosa
                    </Text>
                </View>
                <View style={style.indicatorContainer}>
                    <View style={style.currentIndicator} />
                    </View>
                    <Boton
                        onPress={() => navigation.navigate('principal' as any)}
                        title="Iniciamos"
                        color={Colors.primary}
                    />
                </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    textContainer: {
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'space-between',
      paddingBottom: 40,
    },
    indicatorContainer: {
      height: 50,
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    currentIndicator: {
      height: 12,
      width: 30,
      borderRadius: 10,
      backgroundColor: Colors.primary,
      marginHorizontal: 5,
    },
  });
