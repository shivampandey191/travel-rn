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
import { ImageBackground } from 'react-native';
import Plans from '../ReusableComponents/Plans';
import { Alert } from 'react-native';

class TravellerDetail extends Component {
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

        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={[styles.mainContainer, { backgroundColor: colors.skyBlue, justifyContent: 'center' }]}>
                    <Header title='' navigation={this.props.navigation} />

                    <ScrollView style={{
                        backgroundColor: colors.white,
                        width: wp('100%'),
                        height: hp('92%'),
                    }} contentContainerStyle={{
                        alignItems: 'center',
                    }} >
                        <ImageBackground source={
                            // { uri: this.state.images }
                            require('../Assets/Images/traveller.jpg')
                        }
                            resizeMode='cover' style={{
                                width: '100%',
                                height: hp('30%'),
                                overflow: 'hidden',
                            }} >
                            <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                <FontAwesome5Icon name='heart' color={colors.white} size={30} style={{ alignSelf: 'flex-end', marginRight: 20, marginTop: 15 }} />
                            </TouchableOpacity>
                        </ImageBackground>
                        <View style={{ width: wp('100%'), padding: 15, elevation: 5, marginBottom: 15, backgroundColor: colors.white }}>
                            <Text style={[styles.blackText, { fontSize: 20 }]}>Rosalyn Williams, 30</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome5Icon name='briefcase' size={16} color='gray' />
                                <Text style={[styles.grayText, { fontSize: 16, marginLeft: 8 }]}>Data Scientist</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome5Icon name='user' solid={true} size={16} color='gray' />
                                <Text style={[styles.grayText, { fontSize: 16, marginLeft: 8 }]}>Women</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome5Icon name='map-marker-alt' size={16} color='gray' />
                                <Text style={[styles.grayText, { fontSize: 16, marginLeft: 8 }]}>New York (4500 miles)</Text>
                            </View>
                        </View>
                        <View style={{ width: wp('100%'), padding: 15, marginBottom: 15, elevation: 5, backgroundColor: colors.white }}>
                            <Text style={[styles.blackText, { fontSize: 20 }]}>About</Text>
                            <Text style={[styles.grayText, { fontSize: 16 }]}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam</Text>
                        </View>
                        <View style={{ width: wp('100%'), padding: 15, marginBottom: 15, elevation: 5, backgroundColor: colors.white }}>
                            <Text style={[styles.blackText, { fontSize: 20 }]}>What is your favourite food ?</Text>
                            <Text style={[styles.grayText, { fontSize: 16 }]}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam</Text>
                        </View>
                        <View style={{ width: wp('100%'), padding: 15, marginBottom: 15, elevation: 5, backgroundColor: colors.white }}>
                            <Text style={[styles.blackText, { fontSize: 20 }]}>What is your favourite thing to do while travelling ?</Text>
                            <Text style={[styles.grayText, { fontSize: 16 }]}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam</Text>
                        </View>
                        <View style={{ width: wp('100%'), padding: 15, marginBottom: 15, elevation: 5, backgroundColor: colors.white }}>
                            <Text style={[styles.blackText, { fontSize: 20 }]}>What is the most adventurous thing you have done ?</Text>
                            <Text style={[styles.grayText, { fontSize: 16 }]}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam</Text>
                        </View>
                    </ScrollView>
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
                </View>
            </SafeAreaView>

        )
    }
}

export default TravellerDetail;
