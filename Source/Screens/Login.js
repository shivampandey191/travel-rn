import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Text, View, SafeAreaView, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native';
import styles from '../Assets/Css';
import { colors } from '../Assets/Constants/colors';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={[styles.middleContainer, { marginTop: hp('25%') }]}>
                        <Text style={[styles.splashText, { fontSize: 25, marginBottom: 20 }]}>Let The Adventure Begin...</Text>
                        <View style={styles.textInputBox}>
                            <TextInput
                                style={[styles.inputText]}
                                placeholderTextColor='gray'
                                placeholder='Enter Your Password' />
                        </View>
                        <View style={styles.textInputBox}>
                            <TextInput
                                secureTextEntry={true}
                                style={[styles.inputText]}
                                placeholderTextColor='gray'
                                placeholder='Enter Your Password' />
                            <TouchableOpacity style={{ justifyContent: 'flex-end' }}>
                                <FontAwesome5Icon name='eye' solid='true' size={22} color='gray' />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FirstName')} style={[styles.btn, { width: wp('65%') }]}>
                            <Text style={[styles.splashWhiteText, { fontSize: 25 }]}> Sign In Now
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FirstName')} style={{ alignItems: 'center', marginTop: 25 }}>
                            <Text style={[styles.splashText, { fontSize: 20 }]}> Forgot Password ? </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')} style={{ flexDirection: 'row', position: 'absolute', bottom: 30 }}>
                        <Text style={[styles.splashWhiteText, { color: 'gray', fontSize: 20 }]}>Don't have an Account ?</Text>
                        <Text style={[styles.splashText, { fontSize: 20, textDecorationLine: 'underline' }]}>  Signup</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default Login;
