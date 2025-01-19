import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';


class FavThing extends Component {
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={styles.middleContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>What is your Favourite thing to do while travelling ?</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.inputText}
                                placeholderTextColor={colors.skyBlue}
                                placeholder='Thai Food,Italian Food' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AdventurousThing')} style={styles.forwardBtn}>
                        <FontAwesome5Icon name='angle-right' color={colors.white} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FavFood')} style={styles.backwardBtn}>
                        <FontAwesome5Icon name='angle-left' color={colors.white} size={30} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default FavThing;
