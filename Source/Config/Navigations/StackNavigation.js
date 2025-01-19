import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../Screens/Splash';
import Login from '../../Screens/Login';
import AddPhotos from '../../Screens/AddPhotos';
import TravellerDetail from '../../Screens/TravellerDetail';
import SearchTraveller from '../../Screens/SearchTraveller';
import Transaction from '../../Screens/Transaction';
import VerificationStack from './VerificationStack';
import TabNavigation from './TabNavigation';
import AboutmeStack from './AboutmeStack';
import Bookmark from '../../Screens/Bookmark';
import Mycalendar from '../../Screens/Calendar/MyCalendar';
import SetCalendar from '../../Screens/Calendar/SetCalendar';

const stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="TabNavigation" headerMode='none'>
                <stack.Screen name="Splash" component={Splash} />
                <stack.Screen name="VerificationStack" component={VerificationStack} />
                <stack.Screen name="TabNavigation" component={TabNavigation} />
                <stack.Screen name="AboutmeStack" component={AboutmeStack} />
                <stack.Screen name="Login" component={Login} />
                <stack.Screen name="TravellerDetail" component={TravellerDetail} />
                <stack.Screen name="SearchTraveller" component={SearchTraveller} />
                <stack.Screen name="Transaction" component={Transaction} />
                <stack.Screen name="Bookmark" component={Bookmark} />
                <stack.Screen name="AddPhotos" component={AddPhotos} />
                <stack.Screen name="MyCalendar" component={Mycalendar} />
                <stack.Screen name="SetCalendar" component={SetCalendar} />

            </stack.Navigator>
        </NavigationContainer>
    );
}