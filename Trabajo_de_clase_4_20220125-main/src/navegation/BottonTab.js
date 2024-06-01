import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import PokemonList from '../screens/PokemonList';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';
// Importa la pantalla
import ItemListScreen from '../screens/ItemListScreen';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          tabBarActiveTintColor: '#ea9ab2',
          headerStyle: {
            backgroundColor: '#ea9ab2',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonAxios"
        component={PokemonAxios}
        options={{
          title: 'Lista Pokemon con Axios',
          tabBarActiveTintColor: '#ea9ab2',
          headerStyle: {
            backgroundColor: '#efcfe3',
            borderBottomRightRadius: 35,
            borderBottomLeftRadius: 35,
          },
          headerTintColor: '#000000',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          title: 'Lista Pokemon Fetch',
          tabBarActiveTintColor: '#ea9ab2',
          headerStyle: {
            backgroundColor: '#3b4cca',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ItemListScreen"
        component={ItemListScreen}
        options={{
          title: 'Lista de Items',
          tabBarActiveTintColor: '#ea9ab2',
          headerStyle: {
            backgroundColor: '#ff6347',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
