import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import styles from '../Assets/Css';
import { colors } from '../Assets/Constants/colors';
import { Image } from 'react-native';
import Header from '../ReusableComponents/Header';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import scene1 from '../Assets/Images/scene1.jpg';
import scene2 from '../Assets/Images/scene2.jpg';
import scene3 from '../Assets/Images/scene3.jpg';
import scene4 from '../Assets/Images/scene4.jpg';
import { Modal } from 'react-native';

class Transaction extends Component {
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
        let matches = [
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 1200/-', plan: '12 months plan' },
            { amount: 'Rs. 400/-', plan: '1 month plan' },
            { amount: 'Rs. 700/-', plan: '6 months plan' }
        ]
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={[styles.mainContainer, { backgroundColor: colors.skyBlue }]}>
                    <Header title='My Transaction' navigation={this.props.navigation} />

                    <View style={{
                        backgroundColor: colors.white,
                        width: wp('100%'),
                        height: hp('92%'),
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        alignItems: 'center',
                        paddingTop: 15,
                    }} >
                        <FlatList
                            data={matches}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={{ width: wp('90%'), elevation: 5, backgroundColor: colors.white, padding: 10, borderRadius: 15, margin: 10 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.blackText, { fontSize: 17 }]}>Window Seat Subscription</Text>
                                        <Text style={[styles.grayText, { fontSize: 17 }]}>{item.amount}</Text>
                                    </View>
                                    <Text style={[styles.grayText, { marginHorizontal: 4, marginRight: 20 }]}>{item.plan}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </SafeAreaView>

        )
    }
}

export default Transaction;
