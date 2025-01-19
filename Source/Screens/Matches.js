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
import HeaderSearch from '../ReusableComponents/HeaderSearch';
import { FlatList } from 'react-native';

class Matches extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let matches = [
            { Name: 'Smayra Joshi' },
            { Name: 'Smayra Joshi' },
            { Name: 'Smayra Joshi' },
            { Name: 'Smayra Joshi' },
        ]
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={[styles.mainContainer, { backgroundColor: colors.skyBlue }]}>
                    <HeaderSearch title='Matches' navigation={this.props.navigation} />
                    <View style={{
                        backgroundColor: colors.white,
                        width: wp('100%'),
                        height: hp('92%'),
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        alignItems: 'center'
                    }} >
                        <FlatList
                            data={matches}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.matches}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            source={require('../Assets/Images/profile.jpeg')}
                                            style={[styles.matchesImage]}
                                        />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={[styles.blackText, { fontSize: 17 }]}>{item.Name}</Text>
                                            <Text style={[styles.grayText, { fontSize: 15 }]}>Hello Nick....</Text>
                                        </View>
                                    </View>
                                    <View >
                                        <FontAwesome5Icon name='map-marker-alt' size={25} color='gray' style={{ alignSelf: 'flex-end' }} />
                                        <View style={styles.matchesInner}>
                                            <Text style={{ fontSize: 12 }}>Your Turn</Text>
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

export default Matches;
