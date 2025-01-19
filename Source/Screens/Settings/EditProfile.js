import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

class EditProfile extends Component {
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
        const Header = (prop) => {
            return (
                <View style={styles.HeaderCntnr}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                        <FontAwesome5Icon name='arrow-left' size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.compText}>{prop.title}</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NewProfile')}>
                        <Text style={styles.compText}>Save</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        const ProfileComps = (prop) => {
            return (
                <View style={styles.LowerBtns}>
                    <Text style={{ fontSize: 15, color: '#797e95' }}>{prop.compName}</Text>
                    <TextInput placeholder={prop.data} placeholderTextColor='black' style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textDecorationColor: 'black' }} />
                </View>
            )
        }

        return (
            <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }} >
                <View style={{ backgroundColor: '#1F284E', paddingBottom: 40 }} >
                    <Header title='Edit Profile' />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 20 }}>
                            <Image source={require('./Assets/Images/profilepic.png')}
                                style={{ width: 170, height: 170, borderRadius: 200 }} />
                            <TouchableOpacity style={{ position: 'absolute', bottom: 25, right: -5, backgroundColor: 'red', borderRadius: 100, height: 45, width: 45, alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5Icon name='camera' size={18} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.mainCntnr} >
                    <ProfileComps icon='person' compName='Username' data='Adam Gilchrist' />
                    <ProfileComps icon='business' compName='Email' data='AdamGilchrist@email.com' />
                    <ProfileComps icon='credit-card' compName='Phone' data='99000917' />
                    <ProfileComps icon='notifications' compName='Gender' data='Male' />
                    <ProfileComps icon='article' compName='Date of Birth' data='2 Aug 1992' />
                </View>

            </KeyboardAvoidingView>

        )
    }
}

export default EditProfile;

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

