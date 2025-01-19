import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';
import { TouchableOpacity } from 'react-native';

class Password extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={styles.topTextContainer}>
                        <Text style={styles.progressBarText}> 2 of 11 Answered </Text>
                        <Progress.Bar progress={2 / 11} width={wp('90%')} />
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>2. Create a Password</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput secureTextEntry={true} style={styles.inputText}
                                placeholderTextColor={colors.skyBlue}
                                placeholder='************' />
                            <CheckBox
                                checkedIcon='eye-slash'
                                checkedColor={colors.skyBlue}
                                uncheckedIcon='cross'
                                checked={'true'}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FirstName')} style={styles.forwardBtn}>
                        <FontAwesome5Icon name='angle-right' color={colors.white} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')} style={styles.backwardBtn}>
                        <FontAwesome5Icon name='angle-left' color={colors.white} size={30} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default Password;
