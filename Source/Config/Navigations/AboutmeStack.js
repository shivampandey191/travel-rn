import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutMe from '../../Screens/About/AboutMe';
import AdventurousThing from '../../Screens/About/AdventurousThing';
import FavFood from '../../Screens/About/FavFood';
import FavThing from '../../Screens/About/FavThing';
import Questions from '../../Screens/About/Questions';



const stack = createStackNavigator();

export default function AboutmeStack() {
    return (
        <stack.Navigator initialRouteName="AboutMe" headerMode='none'>
            <stack.Screen name="AboutMe" component={AboutMe} />
            <stack.Screen name="AdventurousThing" component={AdventurousThing} />
            <stack.Screen name="FavFood" component={FavFood} />
            <stack.Screen name="FavThing" component={FavThing} />
            <stack.Screen name="Questions" component={Questions} />

        </stack.Navigator>
    );
}