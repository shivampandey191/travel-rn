import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Text, View, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import styles from '../Assets/Css';
import { colors } from '../Assets/Constants/colors';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import Header from '../ReusableComponents/Header';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import dp1 from '../Assets/Images/dp1.jpg';
import dp2 from '../Assets/Images/dp2.jpg';
import dp3 from '../Assets/Images/dp3.png';
import dp4 from '../Assets/Images/dp4.jpg';
import { Modal } from 'react-native';
import Footer from '../ReusableComponents/Footer';
import PaidFilter from '../ReusableComponents/Filter/PaidFilter';
import FreeFilter from '../ReusableComponents/Filter/FreeFilter';
// import { Footer, FooterTab, Button, Icon } from 'native-base';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            render: true,
            liked: [true, false, true, false, true, false, true, false, true, false, true, false],
            matches: [
                { id: 0, Name: 'Smayra Joshi', image: dp1, age: ' (21)', location: 'New York', distance: '120 miles' },
                { id: 1, Name: 'Nick Jonas', image: dp2, age: ' (24)', location: 'Delhi', distance: '220 miles' },
                { id: 2, Name: 'Martha', image: dp3, age: ' (26)', location: 'London', distance: '420 miles' },
                { id: 3, Name: 'Rosalyn Williams', image: dp4, age: ' (20)', location: 'Mumbai', distance: '110 miles' },
                { id: 4, Name: 'Smayra Joshi', image: dp1, age: ' (21)', location: 'New York', distance: '120 miles' },
                { id: 5, Name: 'Nick Jonas', image: dp2, age: ' (24)', location: 'Delhi', distance: '220 miles' },
                { id: 6, Name: 'Martha', image: dp3, age: ' (26)', location: 'London', distance: '420 miles' },
                { id: 7, Name: 'Rosalyn Williams', image: dp4, age: ' (20)', location: 'Mumbai', distance: '110 miles' },
                { id: 8, Name: 'Smayra Joshi', image: dp1, age: ' (21)', location: 'New York', distance: '120 miles' },
                { id: 9, Name: 'Nick Jonas', image: dp2, age: ' (24)', location: 'Delhi', distance: '220 miles' },
                { id: 10, Name: 'Martha', image: dp3, age: ' (26)', location: 'London', distance: '420 miles' },
                { id: 11, Name: 'Rosalyn Williams', image: dp4, age: ' (20)', location: 'Mumbai', distance: '110 miles' },

            ]
        }
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    setRender = (render) => {
        this.setState({ render: render });
    }
    render() {
        console.log(this.state.matches.findIndex(element => element))

        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={[styles.mainContainer, { backgroundColor: colors.skyBlue, paddingBottom: 15 }]}>
                    <View style={styles.homeHeader}>
                        <Text style={[styles.splashWhiteText, { fontSize: 25 }]}>Window Seat</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <FontAwesome5Icon name='search' size={30} color={colors.white} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.notification}>
                                    <FontAwesome5Icon name='bell' size={30} color={colors.white}
                                        style={{ alignSelf: 'center' }} />
                                    <View
                                        style={styles.notificationCount} >
                                        <Text style={{ fontSize: 12, color: colors.skyBlue }}>9</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.homeContainer} >
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })} style={{ width: wp('100%'), paddingHorizontal: 30 }}>
                            <FontAwesome5Icon name='filter' color={colors.skyBlue} size={25} />
                        </TouchableOpacity>
                        <FlatList
                            data={this.state.matches}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            renderItem={({ item }) => (
                                <View>
                                    <ImageBackground source={item.image}
                                        resizeMode='cover' style={styles.homeImg} >
                                        <TouchableOpacity style={styles.star} >
                                            <FontAwesome5Icon onPress={() => this.setState({ liked: [item.id] })} name='star' color={colors.skyBlue} size={15} />
                                        </TouchableOpacity>
                                        <View style={styles.user}>
                                            <Text numberOfLines={1} style={[styles.splashWhiteText, { alignSelf: 'flex-start' }]}>{item.Name},{(item.age)}</Text>
                                            <Text numberOfLines={1} style={[styles.splashWhiteText, { alignSelf: 'flex-start' }]}>{item.location},{(item.distance)}</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            )} />
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        {
                            this.state.render ? <PaidFilter visible={this.setModalVisible} render={this.setRender} /> :
                                <FreeFilter visible={this.setModalVisible} render={this.setRender} />
                        }
                    </Modal>
                </View>

            </SafeAreaView>

        )
    }
}

export default Home;
