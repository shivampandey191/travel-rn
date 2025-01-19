import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../Assets/Constants/colors';
import CustomButton from '../ReusableComponents/Button';
import CustomHeader from '../ReusableComponents/Header';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // modalVisible: false
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }} >
                <CustomHeader leftIcon='arrow-left' title='Business' navigation={this.props.navigation} />
                <View
                    style={{
                        width: wp('100%'),
                        height: hp('90%'),
                        backgroundColor: colors.white,
                        borderTopLeftRadius: 80,
                        borderTopRightRadius: 80,
                        paddingTop: hp('10%')
                    }}>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Billing')}
                        style={{
                            width: wp('70%'),
                            backgroundColor: colors.liamtra,
                            padding: 20,
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginTop: 15
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, color: colors.white }}>Billing</Text>
                        <FontAwesome5Icon name='angle-right' size={30} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Gst')}
                        style={{
                            width: wp('70%'),
                            backgroundColor: colors.liamtra,
                            padding: 20,
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomLeftRadius: 20,
                            borderTopRightRadius: 20,
                            marginTop: 15
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, color: colors.white }}>GST</Text>
                        <FontAwesome5Icon name='angle-right' size={30} color={colors.white} />
                    </TouchableOpacity>

                </View>

                {/* <CustomHeader title='Business' leftIcon='arrow-left' navigation={this.props.navigation} />
                <CustomButton title='Billing' size={24} color='white' width={250} height={50} nav='Billing' navigation={this.props.navigation} />
                <CustomButton title='GST' size={24} color='white' width={250} height={50} nav='Gst' navigation={this.props.navigation} /> */}

            </View>

        )
    }
}

export default Business;

const styles = StyleSheet.create({
    lowerBtnsTO: {
        marginBottom: 5
    },
    LowerBtns: {
        width: wp('90%'),
        height: hp('8%'),
        marginTop: hp('1.7%'),
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    compText: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    nameCntnr: {
        marginLeft: hp('2%'),
        marginTop: hp('1%')
    },
    HeaderCntnr: {
        width: wp('100%'),
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        flexDirection: 'row',
        height: hp('8%'),
        alignItems: 'center'
    },
    profilePicCntnr: {
        backgroundColor: 'white',
        padding: 5,
        marginTop: 15,
        marginLeft: 40,
        borderRadius: 150
    },
    mainCntnr: {
        backgroundColor: 'white',
        width: wp('100%'),
        // height: hp('92%'),
        paddingBottom: 15,
    }
})

