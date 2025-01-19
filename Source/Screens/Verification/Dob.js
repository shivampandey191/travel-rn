import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';
import DatePicker from 'react-native-datepicker';

class Dob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '02-06-2021'
        }
    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={styles.mainContainer}>
                    <View style={styles.topTextContainer}>
                        <Text style={styles.progressBarText}> 5 of 11 Answered </Text>
                        <Progress.Bar progress={5 / 11} width={wp('90%')} />
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>5. What is your Date of Birth ?</Text>
                        <View style={[styles.textInputContainer, { paddingVertical: 10 }]}>
                            <DatePicker
                                style={{ width: 200 }}
                                date={this.state.date}
                                customStyles={{ dateText: { color: colors.skyBlue, fontWeight: 'bold', fontSize: 20 } }}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-01-2016"
                                maxDate="01-01-2022"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {
                                    this.setState({ date: date });
                                }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Gender')} style={styles.forwardBtn}>
                        <FontAwesome5Icon name='angle-right' color={colors.white} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LastName')} style={styles.backwardBtn}>
                        <FontAwesome5Icon name='angle-left' color={colors.white} size={30} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default Dob;
