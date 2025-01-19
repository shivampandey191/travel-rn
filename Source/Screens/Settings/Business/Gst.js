import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InputText from '../ReusableComponents/InputText';
import CustomButton from '../ReusableComponents/Button';
import CustomHeader from '../ReusableComponents/Header';
import { ScrollView } from 'react-native';
import { CheckBox } from 'native-base';

class Gst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            checkbox: false
        }
    }
    setEditable = () => {
        this.setState({ editable: !this.state.editable });
        this.setState({ checkbox: !this.state.checkbox });
    }
    render() {
        return (
            <View style={{ flex: 1 }} >
                <CustomHeader title='GST Info' leftIcon='arrow-left' navigation={this.props.navigation} />
                <ScrollView>
                    <Text style={{ marginTop: 10, fontSize: 24, color: 'black', fontWeight: 'bold', alignSelf: 'center' }}  >
                        Enter GST Information
                    </Text>
                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}  >
                            Want To Create Business Profile ?
                        </Text>
                        <CheckBox onPress={this.setEditable} checked={this.state.checkbox}
                            style={{ height: 25, width: 25, alignItems: 'center' }} />
                    </View>
                    <InputText editable={this.state.editable} placeholder='GST Number' keyboard='numeric' />
                    <InputText editable={this.state.editable} placeholder='Address' />
                    <InputText editable={this.state.editable} placeholder='Company Name' />
                    <CustomButton height={50} width={300} title='Save' color='white' size={20} />
                </ScrollView>
            </View>

        )
    }
}

export default Gst;

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

