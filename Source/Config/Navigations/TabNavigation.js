import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Community from '../../Screens/Community';
import Matches from '../../Screens/Matches';
import Profile from '../../Screens/Profile';
import MyPost from '../../Screens/MyPost';
import { colors } from '../../Assets/Constants/colors';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../Screens/Home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                backgroundColor: colors.white,
                height: heightPercentageToDP('8%'),
                elevation: 3,
                alignItems: 'center'
            }
        }}>
            <Tab.Screen name='Community' component={Community} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontAwesome5Icon solid={focused ? true : false} name='rss-square' size={32} color={focused ? '#5ddfdf' : 'gray'} />
                    </View>
                )
            }} />
            <Tab.Screen name='MyPost' component={MyPost} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontAwesome5Icon solid={focused ? true : false} name='star' size={32} color={focused ? '#5ddfdf' : 'gray'} />
                    </View>
                )
            }} />
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ padding: 15, elevation: 5, position: 'absolute', bottom: heightPercentageToDP('3%'), borderRadius: 50, backgroundColor: focused ? 'white' : 'gray' }}>
                        <FontAwesome5Icon solid={focused ? true : false} name='home' size={32} color={focused ? '#5ddfdf' : 'white'} />
                    </View>
                )
            }} />
            <Tab.Screen name='Matches' component={Matches} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontAwesome5Icon solid={focused ? true : false} name='comments' size={32} color={focused ? '#5ddfdf' : 'gray'} />
                    </View>
                )
            }} />
            <Tab.Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontAwesome5Icon solid={focused ? true : false} name='user' size={32} color={focused ? '#5ddfdf' : 'gray'} />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )

}

export default TabNavigation;

