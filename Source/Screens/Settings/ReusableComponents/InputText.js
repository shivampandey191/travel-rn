import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../Assets/Constants/colors'


class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        }
    }
    setFocus(hasFocus) {
        this.setState({ hasFocus });
    }
    render() {
        return (
            <View style={styles.textInputContainer}>
                <TextInput
                    editable={this.props.editable}
                    returnKeyLabel={this.props.placeholder}
                    placeholderTextColor='gray'
                    placeholder={this.props.placeholder}
                    style={this.state.hasFocus ? styles.focusedTextInput : styles.textInput}
                    onFocus={this.setFocus.bind(this, true)}
                    onBlur={this.setFocus.bind(this, false)}
                    onChangeText={this.props.onChangeText}
                    autoCapitalize='words'
                    keyboardType={this.props.keyboard}
                />

            </View>
        )
    }
}
export default InputText;

const styles = StyleSheet.create({
    textInputContainer: {
        width: wp('90%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        alignSelf: 'center',
        marginTop: 10
    },
    textInputBox: {
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 0.2,
        borderColor: 'gray',
        elevation: 3,
        flexDirection: 'row',
        marginTop: 15,
        height: hp('8%'),
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    focusedTextInput: {
        width: wp('90%'),
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textDecorationColor: 'green',
        borderBottomWidth: 2,
        borderBottomColor: colors.liamtra
    },
    textInput: {
        width: wp('90%'),
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textDecorationColor: 'green',

    },
})
