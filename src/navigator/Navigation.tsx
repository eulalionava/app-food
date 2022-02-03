import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { comidaInterface } from '../interfaces/comidaInterface';
import { DetailScreen } from '../screens/DetailScreen';
import { InicioScreen } from '../screens/InicioScreen';
import { Tabs } from './Tabs';

export type RootStackParam = {
    inicio:undefined,
    principal:undefined
    details:comidaInterface
}

export const Navigation = ()=> {
    const Stack = createStackNavigator<RootStackParam>();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="inicio" component={ InicioScreen } />
            <Stack.Screen name="principal" component={ Tabs } />
            <Stack.Screen name="details" component={ DetailScreen } />
        </Stack.Navigator>
    )
}
