import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Email from '../../Screens/Verification/Email';
import Password from '../../Screens/Verification/Password';
import FirstName from '../../Screens/Verification/FirstName';
import LastName from '../../Screens/Verification/LastName';
import Dob from '../../Screens/Verification/Dob';
import Gender from '../../Screens/Verification/Gender';
import Location from '../../Screens/Verification/Location';
import Hometown from '../../Screens/Verification/Hometown';
import Occupation from '../../Screens/Verification/Occupation';
import Education from '../../Screens/Verification/Education';
import Ethnicity from '../../Screens/Verification/Ethnicity';


const stack = createStackNavigator();

export default function VerificationStack() {
    return (
        <stack.Navigator initialRouteName="Email" headerMode='none'>
            <stack.Screen name="Dob" component={Dob} />
            <stack.Screen name="Education" component={Education} />
            <stack.Screen name="Email" component={Email} />
            <stack.Screen name="Ethnicity" component={Ethnicity} />
            <stack.Screen name="FirstName" component={FirstName} />
            <stack.Screen name="Gender" component={Gender} />
            <stack.Screen name="Hometown" component={Hometown} />
            <stack.Screen name="LastName" component={LastName} />
            <stack.Screen name="Location" component={Location} />
            <stack.Screen name="Occupation" component={Occupation} />
            <stack.Screen name="Password" component={Password} />

        </stack.Navigator>
    );
}