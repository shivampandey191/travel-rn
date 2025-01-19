import React, { Component } from 'react'
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';


class AboutMe extends Component {
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={styles.middleContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>About Me</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.inputText}
                                multiline
                                numberOfLines={6}
                                placeholderTextColor={colors.skyBlue}
                                placeholder='Minimum 100 words' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Questions')} style={styles.forwardBtn}>
                        <FontAwesome5Icon name='angle-right' color={colors.white} size={30} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default AboutMe;
