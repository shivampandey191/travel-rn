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
import { FlatList } from 'react-native';
import scene1 from '../Assets/Images/scene1.jpg';
import scene2 from '../Assets/Images/scene2.jpg';
import scene3 from '../Assets/Images/scene3.jpg';
import scene4 from '../Assets/Images/scene4.jpg';
import { Modal } from 'react-native';

class Bookmark extends Component {
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
            { Name: 'Smayra Joshi', image: scene1 },
            { Name: 'Smayra Joshi', image: scene2 },
            { Name: 'Smayra Joshi', image: scene3 },
            { Name: 'Smayra Joshi', image: scene4 }
        ]
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={[styles.mainContainer, { backgroundColor: colors.skyBlue }]}>
                    <Header title='My Bookmark' navigation={this.props.navigation} />

                    <View style={[styles.flatlistContainer, { height: hp('93%') }]} >
                        <FlatList
                            data={matches}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.postMainContainer}>
                                    <View style={styles.postHeader}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                source={require('../Assets/Images/profile.jpeg')}
                                                style={[styles.matchesImage, { height: 70, width: 70 }]}
                                            />
                                            <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                                                <Text style={[styles.blackText, { fontSize: 17 }]}>{item.Name}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <FontAwesome5Icon name='circle' solid={true} size={5} color='gray' style={{ marginRight: 5 }} />
                                                    <Text style={[styles.grayText, { fontSize: 12 }]}>
                                                        2 mins ago
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                                            <FontAwesome5Icon name='ellipsis-v' size={25} color='gray' />
                                        </TouchableOpacity>
                                    </View>
                                    <Image source={item.image} style={styles.postImage} />
                                    <View style={styles.postHeader} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6, paddingHorizontal: 6, paddingVertical: 3, borderRadius: 15 }}>
                                            <FontAwesome5Icon name='heart' size={20} color='gray' />
                                            <Text style={[styles.grayText, { marginHorizontal: 4, marginRight: 20 }]}>48</Text>
                                            <FontAwesome5Icon name='comment-dots' size={20} color='gray' />
                                            <Text style={[styles.grayText, { marginHorizontal: 4 }]}>23</Text>
                                        </View>
                                        <FontAwesome5Icon name='bookmark' solid={true} size={20} color='yellow' />
                                    </View>
                                    <Text style={[styles.blackText, { fontSize: 17, marginVertical: 10 }]}>Lorem ipsum
                                        <Text style={[styles.grayText, { fontSize: 17 }]}> dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </Text>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={this.state.modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            this.setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={styles.modalView}>
                                                <Text style={styles.modalText}>Hello World!</Text>
                                                <TouchableOpacity
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => this.setModalVisible(!this.state.modalVisible)}
                                                >
                                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                            )}
                        />
                    </View>
                </View>

            </SafeAreaView>

        )
    }
}

export default Bookmark;
