import React, { useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../Assets/Constants/colors';
import styles from '../../Assets/Css/index';
import Header from '../../ReusableComponents/Header'


const MyCalendar = (props) => {
    const [Test, setTest] = useState([
        {
            "ok": true,
            "members": [{
                "id": "W012A3CDE",
                "real_name": "Egon Spengler",
                "tz": "America/Los_Angeles",
                "activity_periods": [{
                    "start_time": "Feb 1 2020  1:33PM",
                    "end_time": "Feb 1 2020 1:54PM"
                },
                {
                    "start_time": "Mar 1 2020  11:11AM",
                    "end_time": "Mar 1 2020 2:00PM"
                },
                {
                    "start_time": "Mar 16 2020  5:33PM",
                    "end_time": "Mar 16 2020 8:02PM"
                }
                ]
            },
            {
                "id": "W07QCRPA4",
                "real_name": "Glinda Southgood",
                "tz": "Asia/Kolkata",
                "activity_periods": [{
                    "start_time": "Feb 1 2020  1:33PM",
                    "end_time": "Feb 1 2020 1:54PM"
                },
                {
                    "start_time": "Mar 1 2020  11:11AM",
                    "end_time": "Mar 1 2020 2:00PM"
                },
                {
                    "start_time": "Mar 16 2020  5:33PM",
                    "end_time": "Mar 16 2020 8:02PM"
                }
                ]
            }
            ]
        }
    ])

    const [date, setDate] = useState([
        {
            month: 'January', date: '15', calendars: [
                { time: '15:00', location: 'Eiffel Tower' },
                { time: '17:00', location: 'The Louvre' }
            ]
        },
        {
            month: 'February', calendars: [
                { time: '14:15', location: 'New York City' },
                { time: '17:30', location: 'Times Square' },
                { time: '19:30', location: 'Statue of Liberty' }
            ]
        },
        {
            month: 'March', calendars: [
                { time: '13:00', location: 'London City' },
                { time: '13:40', location: 'British Museum' },
                { time: '14:30', location: 'Tower of London' },
                { time: '16:00', location: 'Buckingham Palace' },
                { time: '16:00', location: 'Buckingham Palace' },
            ]
        },
        {
            month: 'April', calendars: [
                { time: '09:00', location: 'Mumbai City' },
                { time: '13:00', location: 'Ajanta Caves' },
            ]
        },
        {
            month: 'May', calendars: [
                { time: '12:00', location: 'New Delhi' },
            ]
        },
    ]);

    //==========================================================

    const Calendars = (props) => {
        console.log('||||||||||||||||||||| V.time', props.V.time, '||||||||||||||||||||| ');
        console.log('||||||||||||||||||||| .V.location', props.V.location, '||||||||||||||||||||| ');
        console.log('|||||||||||||||||||||props.I ', props.I, '||||||||||||||||||||| ');
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                <Text style={[styles.blackText, { fontSize: 18, alignSelf: 'flex-start' }]}>{props.V.time}
                    {console.log('My Calendars',)} {props.V.location}
                </Text>
            </View>
        )
    };

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
            <View style={styles.mainContainer}>
                <Header title='My Calendar' navigation={props.navigation} />
                <FlatList
                    data={date}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View>
                            {console.log('flatlist item data-------', item.calendars[0])}
                            <Text style={{ fontSize: 22, marginTop: 25, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: wp('5%') }}>{item.month}</Text>
                            <View style={{ elevation: 4, width: wp('90%'), backgroundColor: colors.lightGray, padding: 10, marginHorizontal: 5, borderRadius: 100, marginTop: 8, flexDirection: 'row' }}>
                                {/* <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Location</Text> */}
                                <View style={{ width: 70, height: 70, borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.skyBlue }}>
                                    <Text style={[styles.splashWhiteText, { fontSize: 30 }]}>15
                                        <Text style={[styles.splashWhiteText, { fontSize: 14 }]}>th</Text>
                                    </Text>
                                </View>
                                <TouchableOpacity style={{ height: 70 }}>
                                    <ScrollView showsVerticalScrollIndicator={false}>
                                        {item.calendars.map((v, i) => (
                                            <Calendars time={item.calendars} V={v} I={i} />
                                        ))}
                                    </ScrollView>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('SetCalendar')} style={[styles.forwardBtn]}>
                <FontAwesome5Icon name='plus' color={colors.white} size={35} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}


export default MyCalendar;


