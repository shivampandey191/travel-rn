import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';

class Gender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex: selectedIndex })
    }

    render() {
        const buttons = ['Male', 'Female', 'Non Binary', 'Other']
        const { selectedIndex } = this.state
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={styles.topTextContainer}>
                        <Text style={styles.progressBarText}> 6 of 11 Answered </Text>
                        <Progress.Bar progress={6 / 11} width={wp('90%')} />
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>6. What is your Gender ?</Text>
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            innerBorderStyle={{ width: 0 }}
                            textStyle={{ color: colors.skyBlue, }}
                            containerStyle={{ height: 40, borderRadius: 15, elevation: 4 }}
                            selectedButtonStyle={{ backgroundColor: colors.skyBlue }}
                        />
                        <View style={styles.textInputContainer}>
                            <TextInput style={styles.inputText}
                                placeholderTextColor={colors.skyBlue}
                                placeholder='Type Your Preferencce' />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Location')} style={styles.forwardBtn}>
                        <FontAwesome5Icon name='angle-right' color={colors.white} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Dob')} style={styles.backwardBtn}>
                        <FontAwesome5Icon name='angle-left' color={colors.white} size={30} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default Gender;
