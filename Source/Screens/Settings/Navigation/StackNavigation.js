import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '../Notification';
import Business from '../Business/index';
import MyProfile from '../MyProfile/MyProfile';
import EditProfile from '../EditProfile';
import Payment from '../Payment';
import NewProfile from '../NewProfile';
import NewsFeed from '../Newsfeed';
import Billing from '../Business/Billing';
import Gst from '../Business/Gst';



const stack = createStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="MyProfile" headerMode='none'>
                <stack.Screen name="Notification" component={Notifications} />
                <stack.Screen name="Business" component={Business} />
                <stack.Screen name="Billing" component={Billing} />
                <stack.Screen name="Gst" component={Gst} />
                <stack.Screen name="MyProfile" component={MyProfile} />
                <stack.Screen name="EditProfile" component={EditProfile} />
                <stack.Screen name="Payment" component={Payment} />
                <stack.Screen name="NewProfile" component={NewProfile} />
                <stack.Screen name="NewsFeed" component={NewsFeed} />
            </stack.Navigator>
        </NavigationContainer>
    );
}