import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../Assets/Constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'




function Footer(props) {
    return (
        <View style={styles.footerStyle}>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigation.navigate('Home')}>
                    <Icon name="home" size={25} color={colors.liamtra} />
                    <Text style={styles.footerText}>Home</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => props.navigation.navigation.navigate('MyProfile')}>
                    <Icon name="envelope" size={25} color={colors.liamtra} />
                    <Text style={styles.footerText}>Chat</Text>
                </TouchableOpacity>
            </View>
            <View  >
                <TouchableOpacity onPress={() => props.navigation.navigation.navigate('MyCart')}>
                    <Icon name="shopping-cart" size={25} color={colors.liamtra} />
                    <Text style={styles.footerText}>Cart</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => props.navigation.navigation.navigate('Login')}>
                    <Icon name="list" size={25} color={colors.liamtra} />
                    <Text style={styles.footerText}>More</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default Footer;

const styles = StyleSheet.create({
    footerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
    },
    footerStyle: {
        width: wp('100%'),
        height: hp('7%'),
        backgroundColor: colors.white,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: hp('94.5%'),
    },
});