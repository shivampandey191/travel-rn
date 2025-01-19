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
import HeaderSearch from '../ReusableComponents/HeaderSearch';
import Footer from '../ReusableComponents/Footer';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import scene1 from '../Assets/Images/scene1.jpg';
import scene2 from '../Assets/Images/scene2.jpg';
import scene3 from '../Assets/Images/scene3.jpg';
import scene4 from '../Assets/Images/scene4.jpg';
import { Modal } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Community extends Component {
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
            { Name: 'Smayra Joshi', image: scene1, color: 'yellow', solid: 'true' },
            { Name: 'Smayra Joshi', image: scene2, color: '', solid: 'false' },
            { Name: 'Smayra Joshi', image: scene3, color: '', solid: 'false' },
            { Name: 'Smayra Joshi', image: scene4, color: 'yellow', solid: 'true' }
        ]
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={[styles.mainContainer, { backgroundColor: colors.skyBlue }]}>
                    <HeaderSearch title='Community' navigation={this.props.navigation} />
                    <View style={styles.flatlistContainer} >
                        <FlatList
                            data={matches}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={{ width: wp('90%'), elevation: 5, backgroundColor: colors.white, margin: 10, padding: 10, borderRadius: 25, marginVertical: 10 }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('TravellerDetail')}>
                                                <Image
                                                    source={require('../Assets/Images/profile.jpeg')}
                                                    style={[styles.matchesImage, { height: 60, width: 60 }]}
                                                />
                                            </TouchableOpacity>
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
                                    </View>
                                    <Image source={item.image} style={{ marginTop: 5, width: '100%', height: 170, borderRadius: 15 }} />
                                    <Text style={[styles.blackText, { fontSize: 17, marginVertical: 5 }]}>Lorem ipsum
                                        <Text style={[styles.grayText, { fontSize: 17 }]}> dolor sit amet, consectetur adipiscing elit </Text>
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.communityBottomCntnr} >
                        <FlatList
                            data={matches}
                            horizontal
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.communityBottom}>
                                    <Image source={item.image} style={styles.communityBottomImg} />
                                    <View style={styles.communityBottomInner}>
                                        <Image
                                            source={require('../Assets/Images/profile.jpeg')}
                                            style={[styles.matchesImage, { height: 30, width: 30 }]} />
                                        <Text style={[styles.blackText, { fontSize: 12 }]}>{item.Name}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <FontAwesome5Icon name='circle' solid={true} size={4} color='gray' style={{ marginRight: 5 }} />
                                            <Text style={[styles.grayText, { fontSize: 10 }]}>
                                                2 mins ago
                                            </Text>
                                        </View>
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

export default Community;
