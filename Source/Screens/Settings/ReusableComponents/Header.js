import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native';
import { colors } from '../Assets/Constants/colors';

const CustomHeader = (props) => {
    return (
        <View style={styles.HeaderCntnr}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <FontAwesome5Icon name={props.leftIcon} size={26} color='white' />
            </TouchableOpacity>
            <Text style={styles.compText}>{props.title}</Text>
            <TouchableOpacity>
                <FontAwesome5Icon name={props.rightIcon} size={26} color='white' />
            </TouchableOpacity>
        </View>
    )
}
export default CustomHeader;

const styles = StyleSheet.create({
    compText: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    HeaderCntnr: {
        width: wp('100%'),
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        flexDirection: 'row',
        backgroundColor: colors.liamtra,
        height: hp('8%'),
        alignItems: 'center',
    },

})
