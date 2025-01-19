import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';

class Email extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={styles.topTextContainer}>
                        <Text style={styles.progressBarText}> 1 of 11 Answered </Text>
                        <Progress.Bar progress={1 / 11} width={wp('90%')} />
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>1. What is your Email Address ?</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.inputText}
                                placeholderTextColor={colors.skyBlue}
                                placeholder='Example.mail@email.com' />
                            <CheckBox
                                style={{ backgroundColor: 'red' }}
                                checkedIcon='check-circle'
                                checkedColor={colors.skyBlue}
                                uncheckedIcon='cross'
                                checked={'true'} />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Password')} style={styles.forwardBtn}>
                    <FontAwesome5Icon name='angle-right' color={colors.white} size={30} />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Email;
