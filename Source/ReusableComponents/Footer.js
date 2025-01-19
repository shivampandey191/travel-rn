import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../Assets/Constants/colors';
import styles from '../Assets/Css';

const Footer = (props) => {
    return (
        <View style={{ width: wp('100%'), justifyContent: 'space-around', position: 'absolute', bottom: 0, flexDirection: 'row', backgroundColor: colors.white, height: hp('8%'), alignItems: 'center' }}>
            <TouchableOpacity
            // onPress={() => props.navigation.navigate()} 
            >
                <FontAwesome5Icon name='rss-square' size={32} color={colors.gray} />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => props.navigation.navigate()} 
            >
                <FontAwesome5Icon name='star' size={32} color={colors.gray} />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => props.navigation.navigate()} 
            >
                <FontAwesome5Icon name='comments' size={32} color={colors.gray} />
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => props.navigation.navigate()} 
            >
                <FontAwesome5Icon name='user' size={32} color={colors.gray} />
            </TouchableOpacity>
        </View>
    )
}

export default Footer;

