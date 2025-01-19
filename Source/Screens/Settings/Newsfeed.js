import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import CustomHeader from './ReusableComponents/Header';
import { ScrollView } from 'react-native';

import styles from './Assets/Css';

import { FlatList } from 'react-native';
import scene1 from './Assets/Images/scene1.jpg';
import scene2 from './Assets/Images/scene2.jpg';
import scene3 from './Assets/Images/scene3.jpg';
import scene4 from './Assets/Images/scene4.jpg';
import { Modal } from 'react-native';
import { colors } from './Assets/Constants/colors';

class NewsFeed extends Component {
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
            { Name: 'Steve Rogers', image: scene1, color: 'yellow', },
            { Name: 'Andrew', image: scene2, color: 'gray', },
            { Name: 'Jimmy Ciego', image: scene3, color: 'gray', },
            { Name: 'Andy Mcbrown', image: scene4, color: 'yellow', }
        ]
        const Header = (prop) => {
            return (
                <View style={styles.HeaderCntnr}>
                    <TouchableOpacity>
                        <FontAwesome5Icon name='arrow-left' size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.compText}>{prop.title}</Text>
                    <TouchableOpacity>
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
            <KeyboardAvoidingView behavior='padding' style={{ flex: 1, backgroundColor: colors.liamtra }} >
                <CustomHeader title='News Feed' leftIcon='arrow-left' navigation={this.props.navigation} />
                <View style={{ backgroundColor: '#1F284E', paddingBottom: 10 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('./Assets/Images/profilepic.png')}
                                style={{ width: 130, height: 130, borderRadius: 200 }} />
                            <TouchableOpacity style={{ position: 'absolute', bottom: 5, right: -5, backgroundColor: 'red', borderRadius: 100, height: 35, width: 35, alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5Icon name='edit' size={15} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        width: wp('80%'),
                        backgroundColor: 'white',
                        borderRadius: 10,
                        flexDirection: 'row',
                        marginBottom: -25,
                        padding: 10,
                        alignSelf: 'center',
                        elevation: 5
                    }}>
                    <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>10</Text>
                        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 16 }}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', width: '34%' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>15</Text>
                        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 16 }}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', width: '33%' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>45</Text>
                        <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 16 }}>Posts</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.flatlistContainer, { height: hp('86%') }]} >
                    <FlatList
                        data={matches}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View style={styles.postMainContainer}>
                                <View style={styles.postHeader}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={require('./Assets/Images/profile.jpeg')}
                                            style={[styles.matchesImage, { height: 70, width: 70 }]}
                                        />
                                        <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                                            <Text style={[styles.blackText, { fontSize: 17 }]}>{item.Name}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[styles.grayText, { fontSize: 12 }]}>
                                                    21 Aug 2021 04:50 pm
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                        <FontAwesome5Icon name='ellipsis-v' size={25} color='gray' />
                                    </TouchableOpacity>
                                </View>
                                <Text style={[styles.blackText, { fontSize: 17, marginVertical: 10 }]}>Lorem ipsum
                                    <Text style={[styles.grayText, { fontSize: 17 }]}> dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                                </Text>
                                <Image source={item.image} style={styles.postImage} />
                                <View style={[styles.postHeader, { marginEnd: 30, marginTop: 5 }]} >
                                    <View style={styles.likeComment}>
                                        <FontAwesome5Icon name='heart' size={20} color='gray' />
                                        <Text style={[styles.grayText, { marginHorizontal: 4, marginRight: 20 }]}>48</Text>
                                        <FontAwesome5Icon name='comment-dots' size={20} color='gray' />
                                        <Text style={[styles.grayText, { marginHorizontal: 4 }]}>23</Text>
                                    </View>
                                    <FontAwesome5Icon name='share' size={20} color='gray' />
                                </View>

                                <Modal
                                    animationType='fade'
                                    transparent={true}
                                    visible={this.state.modalVisible}
                                    onRequestClose={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}
                                >
                                    <View style={[styles.centeredView, { position: 'absolute', right: 20, top: 15 }]}>
                                        <View style={styles.modalView}>
                                            <TouchableOpacity
                                                style={{ alignSelf: 'baseline' }}
                                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                            >
                                                <Text style={styles.grayText}>Edit Post</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{ marginTop: 15, alignSelf: 'baseline' }}
                                                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                            >
                                                <Text style={styles.grayText}>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                            </View>
                        )}
                    />
                </View>
            </KeyboardAvoidingView>

        )
    }
}

export default NewsFeed;


