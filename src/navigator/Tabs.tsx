import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { Prueba } from '../screens/Prueba';

const Tab = createBottomTabNavigator();

export const Tabs = ()=> {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor:''
            }}
            screenOptions={({route})=>({
                headerShown:false,
                tabBarActiveTintColor:Colors.primary,
                tabBarStyle:{
                  borderTopColor:Colors.primary,
                  borderWidth:0,
                  elevation:0
                },
                tabBarLabelStyle:{
                  fontSize:15
                },
                tabBarIcon:({focused,color,size})=>{
                  let iconName:string = '';
        
                  switch(route.name){
                    case 'home':
                        iconName = 'home-outline';
                        break;
                    case 'prueba':
                        iconName='planet-outline';
                        break;
                  }
                  return <Icon name={ iconName } color={color} size={20}/>
                }
              })}
        >
            <Tab.Screen name='home' component={ HomeScreen }/>
            <Tab.Screen name='prueba' component={ Prueba }/>
        </Tab.Navigator>
    )
}
