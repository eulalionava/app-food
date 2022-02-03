import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../const/Colors';

interface Props{
    category:any,
    index:number,
    selectedCategoryIndex:number,
    selecionarCategoria:(valor:number)=>void
}

export const ListaCategorias = ({category,index,selecionarCategoria,selectedCategoryIndex}:Props)=> {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => selecionarCategoria(index)}>
            <View
                style={{
                    backgroundColor:
                    selectedCategoryIndex == index
                        ? Colors.primary
                        : Colors.secondary,
                    ...styles.categoryBtn,
                }}
            >
                <View style={styles.categoryBtnImgCon}>
                    <Image
                    source={category.image}
                    style={{height: 35, width: 35, resizeMode: 'cover'}}
                    />
                </View>
                <Text
                    style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginLeft: 10,
                    color:
                        selectedCategoryIndex == index
                        ? Colors.white
                        : Colors.primary,
                    }}>
                    {category.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: Colors.white,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});