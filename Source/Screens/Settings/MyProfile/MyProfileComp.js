import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


const ProfileComps = (props) => {
    console.log('prop=========', props.navigation)
    return (
        <View style={styles.LowerBtns}>
            <TouchableOpacity style={styles.lowerBtnsTO} onPress={() => props.navigation.navigation.navigate(props.nav)}>
                <Text style={{ marginLeft: 20, fontSize: 18, color: props.color, fontWeight: 'bold' }}>{props.compName}</Text>
                <FontAwesome5Icon name='angle-right' size={25} color='gray' />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileComps;

const styles = StyleSheet.create({
    lowerBtnsTO: {
        flexDirection: 'row',
        height: hp('6%'),
        marginHorizontal: wp('5%'),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    LowerBtns: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#DCDCDC'
    },
});