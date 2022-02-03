import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { Colors } from '../const/Colors'

export const Search = ()=> {
    return (
        <View style={styles.search}>
            <View style={styles.inputContainer}>
                <Icon name="search-outline" size={28} />
                <TextInput 
                    style={{flex: 1, fontSize: 18}}
                    placeholder="Buscar comida"
                />
            </View>
            <View style={styles.sortBtn}>
                <Icon name="search-outline" size={28} color={Colors.white} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    search:{
        marginTop: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: Colors.light,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sortBtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
