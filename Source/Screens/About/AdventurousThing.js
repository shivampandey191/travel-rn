import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';


class AdventurousThing extends Component {
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={styles.middleContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>What is the most adventurous thing you have done ?</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.inputText}
                                placeholderTextColor={colors.skyBlue}
                                placeholder='Paraglyding' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={styles.forwardBtn}>
                        <FontAwesome5Icon name='check' color={colors.white} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FavThing')} style={styles.backwardBtn}>
                        <FontAwesome5Icon name='angle-left' color={colors.white} size={30} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default AdventurousThing;
