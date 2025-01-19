import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../Assets/Constants/colors';
import styles from '../Assets/Css';

const Header = (props) => {
    return (
        <View style={{ width: wp('100%'), justifyContent: 'space-between', paddingHorizontal: 25, flexDirection: 'row', backgroundColor: colors.skyBlue, height: hp('8%'), alignItems: 'center' }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} >
                <FontAwesome5Icon name='arrow-left' size={32} color={colors.white} />
            </TouchableOpacity>
            <Text style={[styles.splashWhiteText, { fontSize: 25, alignSelf: 'center' }]}>{props.title}</Text>
            <TouchableOpacity></TouchableOpacity>
        </View>
    )
}

export default Header;

