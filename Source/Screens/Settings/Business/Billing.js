import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InputText from '../ReusableComponents/InputText';
import CustomButton from '../ReusableComponents/Button';
import CustomHeader from '../ReusableComponents/Header';
import { ScrollView } from 'react-native';

class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // modalVisible: false
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }} >
                <CustomHeader title='Billing' leftIcon='arrow-left' navigation={this.props.navigation} />
                <ScrollView>
                    <InputText placeholder='Billing Address' />
                    <InputText placeholder='Billing City' />
                    <InputText placeholder='Billing State' />
                    <InputText placeholder='Billing Country' />
                    <InputText placeholder='Billing Pincode' keyboard='numeric' />
                    <CustomButton height={50} width={300} title='Save' color='white' size={20} />
                </ScrollView>
            </View>

        )
    }
}

export default Billing;

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

