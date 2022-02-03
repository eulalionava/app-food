import React from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../const/Colors'
import { Card } from '../componets/Card'
import { ListaCategorias } from '../componets/ListaCategorias'
import { Comidas } from '../data/Comidas'
import { useFood } from '../hooks/useFood'
import { Perfil } from '../componets/Perfil'
import { Search } from '../componets/Search'
import { Categorias } from '../data/Categorias'

export const HomeScreen = ()=> {
    const{ selectedCategoryIndex,selecionarCategoria } = useFood();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
            <Perfil/>
            <Search/>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesListContainer}
            >
                {
                    Categorias.map( (category,index)=>(
                        <ListaCategorias
                            key={ index } 
                            category={ category }
                            index={ index }
                            selectedCategoryIndex={selectedCategoryIndex}
                            selecionarCategoria={ selecionarCategoria }
                        />
                    ))
                }
            </ScrollView>
            
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={ Comidas }
                renderItem={({item}) => <Card food={ item } />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
});
