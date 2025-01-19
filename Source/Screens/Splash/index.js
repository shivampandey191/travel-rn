import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { ImageBackground } from 'react-native'
import { StatusBar } from 'react-native'
import { Image } from 'react-native'
import { Text, View } from 'react-native'
import { colors } from '../../Assets/Constants/colors'
import styles from '../../Assets/Css/index'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native'


export class Splash extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('VerificationStack');
        }, 2500);
    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <ImageBackground source={require('../../Assets/Images/Background.png')}
                    resizeMethod='scale'
                    style={styles.splashBg} >
                    <View style={styles.splashMainContainer}>

                        <View style={{ width: wp('75%') }}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                                <View style={styles.cloudMainContainer}>
                                    <View style={styles.cloudContainer}>
                                        <FontAwesome5 color={colors.white} name='cloud' size={26} />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.splashText}>Window</Text>
                                    <Text style={styles.splashText}>Seat</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <Text style={[styles.splashText, { fontSize: 18, alignSelf: 'center', marginTop: 5 }]}>
                                Find your Next Adventure
                            </Text>
                        </View>
                        <View >
                            <Text style={styles.splashWhiteText}>By Signing up for Window Seat , You Agree to</Text>
                            <Text style={styles.splashWhiteText}>our Terms & Services</Text>
                            <TouchableOpacity style={styles.fbButtonContainer}>
                                <FontAwesome5 name='facebook' size={30} color={colors.skyBlue} />
                                <Text style={[styles.splashText, { fontSize: 20, marginLeft: 8 }]}>Login with Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.splashWhiteText, { fontSize: 20, marginTop: 20 }]}>Login / Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

export default Splash;
