/* eslint-disable react/display-name */
import React from 'react';
import PropsTypes from 'prop-types';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './pages/Main';
import Search from './pages/Search';
import Request from './pages/Request';
import Profile from './pages/Profile';
import Bag from './pages/Bag';

// import { Container } from './styles';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const Routes = () => {
  function BottonTabs() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#52BC22',
          inactiveTintColor: '#999',
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          style: {
            height: 60,
          },
          tabStyle: {
            padding: 5,
          },
        }}
      >
        <Tabs.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={25} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Pesquisar',
            tabBarIcon: ({ color }) => (
              <Icon name="search" size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Bag"
          component={Bag}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: '#F8DC46',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 15,
                }}
              >
                <Icon name="shopping-basket" size={25} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Request"
          component={Request}
          options={{
            tabBarLabel: 'Pedidos',
            tabBarIcon: ({ color }) => (
              <Icon name="list" size={25} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color }) => (
              <Icon name="account-circle" size={25} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottonTabs}
        options={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;

Routes.propTypes = {
  color: PropsTypes.string(),
};
