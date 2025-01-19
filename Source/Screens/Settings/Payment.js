import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './Assets/Css/index';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from './Assets/Constants/colors';
import { FlatList } from 'react-native';
import CustomHeader from './ReusableComponents/Header';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    render() {
        let notification = [
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 400/-', plan: '1 month plan' },
            { amount: 'Rs. 700/-', plan: '6 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 400/-', plan: '1 month plan' },
            { amount: 'Rs. 700/-', plan: '6 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 400/-', plan: '1 month plan' },
            { amount: 'Rs. 700/-', plan: '6 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 400/-', plan: '1 month plan' },
            { amount: 'Rs. 700/-', plan: '6 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 400/-', plan: '1 month plan' },
            { amount: 'Rs. 700/-', plan: '6 months plan' }
        ]
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.liamtra} barStyle='light-content' />
                {/* <CustomHeader title='My Payment' leftIcon='arrow-left' navigation={this.props.navigation} /> */}
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ width: wp('50%'), height: hp('30%'), backgroundColor: colors.liamtra }}></View>
                    <View style={{ width: wp('50%'), height: hp('30%'), backgroundColor: colors.white }}></View>
                </View>
                <View
                    style={{
                        width: wp('100%'),
                        height: hp('10%'),
                        backgroundColor: colors.liamtra,
                        borderBottomLeftRadius: 80,
                        borderBottomRightRadius: 80,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row'
                    }}>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <FontAwesome5Icon name='arrow-left' size={26} color='white' />
                    </TouchableOpacity>
                    <Text style={[styles.splashWhiteText, { fontSize: 25 }]}>Payment</Text>
                    <TouchableOpacity>
                        <FontAwesome5Icon size={26} color='white' />
                    </TouchableOpacity>


                </View>

                <View style={{
                    backgroundColor: colors.white,
                    width: wp('100%'),
                    height: hp('90%'),
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    alignItems: 'center',
                    paddingTop: 35,
                }} >
                    <FlatList
                        data={notification}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={{ width: wp('90%'), elevation: 5, backgroundColor: colors.white, padding: 10, borderRadius: 15, margin: 10 }}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[styles.blackText, { fontSize: 17 }]}>Subscription</Text>
                                    <Text style={[styles.grayText, { fontSize: 17 }]}>{item.amount}</Text>
                                </View>
                                <Text style={[styles.grayText, { marginRight: 20 }]}>{item.plan}</Text>
                            </View>
                        )}
                    />
                </View>


                <View style={[styles.mainContainer, {}]}>


                </View>

            </SafeAreaView>

        )
    }
}

export default Payment;
