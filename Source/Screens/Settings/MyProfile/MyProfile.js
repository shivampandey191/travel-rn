import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, Modal, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import ProfileComps from './MyProfileComp';

class MyProfile extends Component {
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
        console.log('props----', this.props)
        // const navigate = this.props.navigation.navigate

        const ProfileBtn = (prop) => {
            return (
                <View>
                    <TouchableOpacity
                        style={{
                            borderRadius: 10,
                            padding: 5,
                            alignContent: 'center',
                            height: 75,
                            width: 75,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: prop.BgColor,
                            elevation: 3
                        }}>
                        <FontAwesome5Icon name={prop.icon} size={25} color='#8f94a7' />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', marginTop: 8, fontWeight: 'bold' }}>{prop.title}</Text>
                </View>
            )
        }

        return (
            <SafeAreaView>
                <View style={{ backgroundColor: '#1F284E' }} >
                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 15, marginTop: 20, color: 'white' }}>My Profile</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}>
                            <Image source={require('../Assets/Images/profilepic.png')}
                                style={{ width: 60, height: 60, borderRadius: 200 }} />
                            <View style={styles.nameCntnr}>
                                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>Adam Gilchrist</Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'gray' }}>News Editor</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#353e60', borderRadius: 100, height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 0.4, borderColor: '#fff' }}>
                            <FontAwesome5Icon onPress={() => this.props.navigation.navigate('EditProfile')} name='pen' size={14} color='white' />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 2, justifyContent: 'space-around', paddingVertical: 20 }}>
                    <ProfileBtn icon='power-off' title='Title 1' BgColor='red' />
                    <ProfileBtn icon='lock' title='Title 2' BgColor='white' />
                    <ProfileBtn icon='key' title='Title 3' BgColor='white' />
                </View>
                <View style={styles.mainCntnr}>
                    <ScrollView>
                        <View style={{ width: wp('100%'), height: hp('1%'), backgroundColor: '#DCDCDC' }}></View>
                        <ProfileComps icon='person' compName='Profile' nav='NewProfile' navigation={this.props} />
                        <ProfileComps icon='business' compName='Business' nav='Business' navigation={this.props} />
                        <View style={{ width: wp('100%'), height: hp('1%'), backgroundColor: '#DCDCDC' }}></View>
                        <ProfileComps icon='credit-card' compName='Payment' nav='Payment' navigation={this.props} />
                        <ProfileComps icon='notifications' compName='Notification' nav='Notification' navigation={this.props} />
                        <ProfileComps icon='article' compName='Newsfeed' nav='NewsFeed' navigation={this.props} />
                        <View style={{ width: wp('100%'), height: hp('1%'), backgroundColor: '#DCDCDC' }}></View>
                        <ProfileComps icon='logout' color='red' compName='Sign Out' nav='' navigation={this.props} />
                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}

export default MyProfile;

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
    compText: {
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold'
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
        backgroundColor: 'white',
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
        height: hp('92%'),
        paddingBottom: 15,
    }
})

