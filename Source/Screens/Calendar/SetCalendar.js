import React, { useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
// import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';
import DatePicker from 'react-native-datepicker';
import { Modal } from 'react-native-paper';
import SetLocation from './SetLocation';
import Hour from '../../ReusableComponents/TimeModals/Hour';
import Minute from '../../ReusableComponents/TimeModals/Minute';


const SetCalendar = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [location, setLocation] = useState('New Delhi');
    const [date, setDate] = useState(new Date());

    const [hourModal1, setHourModal1] = useState(false);
    const [minuteModal1, setMinuteModal1] = useState(false);
    const [hourModal2, setHourModal2] = useState(false);
    const [minuteModal2, setMinuteModal2] = useState(false);

    const [hour1, setHour1] = useState('10');
    const [minute1, setMinute1] = useState('45');
    const [hour2, setHour2] = useState('02');
    const [minute2, setMinute2] = useState('45');

    const setLocationModal = (visible) => {
        setModalVisible(visible);
    }
    const selectLocation = (visible, location) => {
        setModalVisible(visible);
        setLocation(location);
    }

    //==========================================================

    const selectHour1 = (visible, hour1) => {
        setHourModal1(visible);
        setHour1(hour1);
    }
    const selectMinute1 = (visible, minute1) => {
        setMinuteModal1(visible);
        setMinute1(minute1);
    }

    const selectHour2 = (visible, hour2) => {
        setHourModal2(visible);
        setHour2(hour2);
    }
    const selectMinute2 = (visible, minute2) => {
        setMinuteModal2(visible);
        setMinute2(minute2);
    }

    return (
        <SafeAreaView>

            <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
            <View style={styles.mainContainer}>
                <View style={styles.topTextContainer}>
                    <Text style={styles.blackText}>My Calendar</Text>
                </View>
                <View style={[styles.middleContainer, { marginTop: hp('10%') }]}>
                    <View style={{ backgroundColor: colors.lightGray, padding: 10, borderRadius: 7, marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Date</Text>
                        <View>
                            <View
                                style={[styles.textInputContainer, { alignItems: 'center', borderBottomColor: colors.gray }]}>
                                <DatePicker
                                    style={{ width: 200 }}
                                    date={date}
                                    mode='date'
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2022-06-01"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    showIcon={false}
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 50,
                                            top: 4,
                                        },
                                        dateInput: {
                                            position: 'absolute',
                                            left: 5,
                                            borderWidth: 0
                                        }
                                    }}
                                    onDateChange={(date) => { setDate(date) }}
                                />
                                <FontAwesome5Icon name='calendar-alt' color={colors.gray} size={20} />
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.lightGray, padding: 10, borderRadius: 7, marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Time</Text>

                        <View style={[styles.textInputContainer, { alignItems: 'center', paddingVertical: 10 }]}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={styles.timeContainer} onPress={() => setHourModal1(true)}  >
                                    <Text style={styles.timeText}>{hour1}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.timeContainer} onPress={() => setMinuteModal1(true)} >
                                    <Text style={styles.timeText}>{minute1} </Text>
                                </TouchableOpacity>
                                <Text style={styles.timeText}> - </Text>
                                <TouchableOpacity style={styles.timeContainer} onPress={() => setHourModal2(true)} >
                                    <Text style={styles.timeText}>{hour2} </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.timeContainer} onPress={() => setMinuteModal2(true)} >
                                    <Text style={styles.timeText}>{minute2}</Text>
                                </TouchableOpacity>
                            </View>
                            <FontAwesome5Icon name='clock' color={colors.gray} size={20} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.lightGray, padding: 10, borderRadius: 7, marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Location</Text>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={[styles.textInputContainer, { alignItems: 'center', paddingVertical: 10 }]}>
                            <Text>
                                {location}
                            </Text>
                            <FontAwesome5Icon name='map-marker-alt' color={colors.gray} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('MyCalendar')} style={[styles.btn, { paddingHorizontal: 20 }]}>
                    <Text style={styles.splashWhiteText}>Add Additional Event</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}>
                <SetLocation visible={setLocationModal} selectLocation={selectLocation} />
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={hourModal1}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!hourModal);
                }}>
                <Hour selectHour={selectHour1} />
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={minuteModal1}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!minuteModal);
                }}>
                <Minute selectMinute={selectMinute1} />
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={hourModal2}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!hourModal);
                }}>
                <Hour selectHour={selectHour2} />
            </Modal>
            <Modal
                animationType='slide'
                transparent={true}
                visible={minuteModal2}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!minuteModal);
                }}>
                <Minute selectMinute={selectMinute2} />
            </Modal>


        </SafeAreaView>
    )
}


export default SetCalendar;


