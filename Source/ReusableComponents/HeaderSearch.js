import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../Assets/Constants/colors';
import styles from '../Assets/Css';

const HeaderSearch = (props) => {
    return (
        <View style={{ width: wp('100%'), justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: 'row', backgroundColor: colors.skyBlue, height: hp('8%'), alignItems: 'center' }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()} >
                <FontAwesome5Icon name='arrow-left' size={30} color={colors.white} />
            </TouchableOpacity>
            <Text style={[styles.splashWhiteText, { fontSize: 25, alignSelf: 'center' }]}>{props.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <FontAwesome5Icon name='search' size={30} color={colors.white} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 70, width: 70, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }} >
                    <FontAwesome5Icon name='bell' size={30} color={colors.white}
                        style={{ alignSelf: 'center' }} />
                    <View
                        style={{ borderWidth: 1, padding: 2, borderColor: colors.skyBlue, borderRadius: 40, position: 'absolute', top: 15, right: 15, backgroundColor: colors.white, alignItems: 'center' }} >
                        <Text style={{ fontSize: 12, color: colors.skyBlue }}>9</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderSearch;
