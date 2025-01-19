import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, Modal, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { colors } from './Assets/Constants/colors';

class NewProfile extends Component {
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
        const ProfileComps = (prop) => {
            return (
                <View style={styles.LowerBtns}>
                    <TouchableOpacity style={styles.lowerBtnsTO}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcon name={prop.icon} size={30} color='#1F284E' />
                            <Text style={{ marginLeft: 20, fontSize: 18 }}>{prop.compName}</Text>
                        </View>
                        <Text>{prop.data}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.mainCntnr}>
                    <Image source={require('./Assets/Images/kinfolk.jpg')}
                        style={{ width: '100%', height: 250 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, width: wp('100%'), position: 'absolute', top: 30 }}>
                        <FontAwesome5Icon onPress={() => this.props.navigation.goBack()} name='arrow-left' size={30} color={colors.liamtra} />
                        <FontAwesome5Icon onPress={() => this.props.navigation.navigate('EditProfile')} name='edit' size={30} color={colors.liamtra} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.profilePicCntnr}>
                            <Image source={require('./Assets/Images/profilepic.png')}
                                style={styles.img} />
                        </View>
                        <View style={styles.nameCntnr}>
                            <Text style={styles.name}>Adam Gilchrist</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'gray' }}>News Editor</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <ProfileComps icon='person' compName='Name' data='Adam Gilchrist' />
                        <ProfileComps icon='email' compName='Email' data='AdamGilchrist@email.com' />
                        <ProfileComps icon='phone' compName='Phone' data='99000917' />
                        <ProfileComps icon='wc' compName='Gender' data='Male' />
                        <ProfileComps icon='cake' compName='Date of Birth' data='2 Aug 1992' />
                    </ScrollView>
                </View>

            </SafeAreaView>
        )
    }
}

export default NewProfile;
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
        height: hp('7%'),
        backgroundColor: 'white',
        marginTop: hp('1.7%'),
        justifyContent: 'center'
    },
    img: { 
        width: 130, 
        height: 130, 
        borderRadius: 200 
    },
    nameCntnr: {
        marginLeft: hp('2%'),
        marginTop: hp('1%')
    },
    profilePicCntnr: {
        backgroundColor: 'white',
        padding: 5,
        marginTop: -65,
        marginLeft: 40,
        borderRadius: 150
    },
    mainCntnr: {
        backgroundColor: 'white',
        width: wp('100%'),
        height: hp('92%'),
        paddingBottom: 15,
    },
    name: { 
        width: 130, 
        height: 130, 
        borderRadius: 200 
    },
})

