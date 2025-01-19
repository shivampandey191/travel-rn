import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, Modal } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import styles from '../Assets/Css';
import { colors } from '../Assets/Constants/colors';
import { Image } from 'react-native';
import Header from '../ReusableComponents/Header';
import { ScrollView } from 'react-native';
import Plans from '../ReusableComponents/Plans';

class Profile extends Component {
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(prop.nav)} style={styles.lowerBtnsTO}>
                        <MaterialIcon name={prop.icon} size={30} color='gray' />
                        <Text style={[styles.grayText, { marginLeft: 20 }]}>{prop.compName}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <Header title='Profile' navigation={this.props.navigation} />
                <View style={[styles.mainContainer, { backgroundColor: colors.skyBlue }]}>
                    <View style={{
                        backgroundColor: colors.white,
                        width: wp('100%'),
                        height: hp('86%'),
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        alignItems: 'center',
                        paddingBottom: 15,
                    }}>
                        <ScrollView ver >
                            <View style={{ width: '100%', alignItems: 'center' }}>
                                <Image source={require('../Assets/Images/profile.jpeg')}
                                    style={styles.profileImage} />
                                <Text style={styles.blackText}>Smayra Joshi, 30</Text>
                                <Text style={[styles.grayText, { fontSize: 18 }]}>University of Arts & Science, New York</Text>
                                <View style={{ flexDirection: 'row', width: wp('60%'), justifyContent: 'space-around', marginTop: 10 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPhotos')} >
                                            <View style={{ height: 70, width: 70, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#dbdbd1' }}>
                                                <FontAwesome5Icon name='camera' size={30} color={colors.gray}
                                                    style={{ alignSelf: 'center' }} />
                                            </View>
                                            <FontAwesome5Icon name='plus-circle' size={20} color={colors.skyBlue}
                                                style={{ position: 'absolute', bottom: 0, left: 50 }} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 6 }}>Add Media</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutmeStack')}>
                                            <View style={{ height: 70, width: 70, alignItems: 'center', justifyContent: 'center', borderRadius: 100, backgroundColor: '#dbdbd1' }}>
                                                <FontAwesome5Icon name='pen' size={30} color={colors.gray}
                                                    style={{ alignSelf: 'center' }} />
                                            </View>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 6 }}>Edit Info</Text>
                                    </View>
                                </View>
                            </View>

                            <ProfileComps icon='content-paste' nav='MyPost' compName='My Post' />
                            <ProfileComps icon='bookmark-border' nav='Bookmark' compName='My Bookmarks' />
                            <View style={styles.LowerBtns}>
                                <TouchableOpacity style={styles.lowerBtnsTO} onPress={() => this.setModalVisible(true)}>
                                    <MaterialIcon name='add-circle-outline' size={30} color='gray' />
                                    <Text style={[styles.grayText, { marginLeft: 20 }]}>My Window Seat Plus</Text>
                                </TouchableOpacity>
                            </View>
                            <ProfileComps icon='date-range' nav='MyCalendar' compName='My Calendar' />
                            <ProfileComps icon='attach-money' nav='Transaction' compName='My Transactions' />
                            <ProfileComps icon='logout' nav='' compName='Logout' />

                        </ScrollView>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Plans visible={this.setModalVisible} />
                </Modal>
            </SafeAreaView>
        )
    }
}

export default Profile;
