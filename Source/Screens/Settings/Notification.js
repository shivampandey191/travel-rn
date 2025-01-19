import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './Assets/Css/index';
import { colors } from './Assets/Constants/colors';
import { FlatList } from 'react-native';
import CustomHeader from './ReusableComponents/Header';
import { TouchableOpacity } from 'react-native';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbox: false
        }
    }

    setCheckBox = (box) => {
        this.setState({ checkbox: box });
    }
    render() {
        let notification = [
            { Title: 'Wallet', Details: 'You have earned 1 Coin from referral', Date: '12 Aug 2021', Time: '12 pm' },
            { Title: 'Like', Details: 'Martin Liked Your Post', Date: '09 Aug 2021', Time: '02 pm' },
            { Title: 'Comment', Details: 'Martin Commented on Your Post', Date: '03 July 2021', Time: '11 am' },
            { Title: 'Liamtra', Details: 'Hi Adam, Welcome to Liamtra', Date: '01 July 2021', Time: '04 am' }
        ]
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.liamtra} barStyle='light-content' />
                <CustomHeader title='Notifications' leftIcon='arrow-left' rightIcon='cog' navigation={this.props.navigation} />
                <View style={styles.mainContainer}>
                    <View style={{ width: wp('100%'), flexDirection: 'row', marginTop: 10, justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>4 new Notifications</Text>
                        <TouchableOpacity style={{ borderRadius: 5, padding: 10, backgroundColor: '#32CD32', elevation: 3 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>Clear All</Text>
                        </TouchableOpacity>
                    </View>

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
                            data={notification}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={{ width: wp('90%'), elevation: 5, backgroundColor: colors.white, padding: 15, borderRadius: 15, margin: 10 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.blackText, { fontSize: 17 }]}>{item.Title}</Text>
                                        <Text style={[styles.grayText, { fontSize: 15 }]}>{item.Date}</Text>
                                    </View>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.blackText, { fontSize: 13 }]}>{item.Details}</Text>
                                        <Text style={[styles.grayText, { fontSize: 15 }]}>{item.Time}</Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </SafeAreaView>

        )
    }
}

export default Notifications;
