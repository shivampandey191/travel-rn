import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../Assets/Css';
import { colors } from '../../Assets/Constants/colors';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import { Slider } from 'react-native-elements';
import { CheckBox } from 'native-base';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';




const PaidFilter = (props) => {
    const [visible, setVisible] = useState(false);
    const [gender, setGender] = useState();
    const [religion, setReligion] = useState();
    const [value, setValue] = useState();
    const [checked, setChecked] = useState(false);

    const setModalVisible = (visible) => {
        setVisible(visible);
    }
    const setCheckbox = (check) => {
        setChecked(check);
    }

    return (

        <View style={{ height: hp('60%'), elevation: 5, backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => props.visible(false)}>
                    <MaterialIcon name='close' size={30} color='black' />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, margin: 10, color: 'black' }}>My Advanced Preferences</Text>
            </View>
            <ScrollView>
                <View style={{ marginVertical: 8, backgroundColor: colors.lightGray, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={[styles.grayText, { marginStart: 15, marginTop: 8 }]}>Gender</Text>
                    <Picker
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) =>
                            setGender(itemValue)
                        }>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Non Binary" value="non binary" />
                        <Picker.Item label="Other" value="other" />
                    </Picker>
                </View>
                <View style={{ marginVertical: 8, backgroundColor: colors.lightGray, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={[styles.grayText, { marginStart: 15, marginTop: 8 }]}>Age</Text>
                    <TextInput placeholder='Your Age' style={{ marginHorizontal: 10, borderBottomColor: colors.skyBlue, borderBottomWidth: 2 }} />
                </View>
                <View style={{ marginVertical: 8, backgroundColor: colors.lightGray, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={[styles.grayText, { marginStart: 15, marginTop: 8 }]}>Ethnicity</Text>
                    <TextInput placeholder='Indian' style={{ marginHorizontal: 10, borderBottomColor: colors.skyBlue, borderBottomWidth: 2 }} />
                </View>
                <View style={{ marginVertical: 8, backgroundColor: colors.lightGray, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={[styles.grayText, { marginStart: 15, marginTop: 8 }]}>Education</Text>
                    <TextInput placeholder='Post Graduate' style={{ marginHorizontal: 10, borderBottomColor: colors.skyBlue, borderBottomWidth: 2 }} />
                </View>
                <View style={{ marginVertical: 8, backgroundColor: colors.lightGray, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={[styles.grayText, { marginStart: 15, marginTop: 8 }]}>Religion</Text>
                    <Picker
                        selectedValue={religion}
                        onValueChange={(itemValue, itemIndex) =>
                            setReligion(itemValue)
                        }>
                        <Picker.Item label="Hindu" value="hindu" />
                        <Picker.Item label="Muslim" value="muslim" />
                        <Picker.Item label="Christian" value="christian" />
                        <Picker.Item label="Sikh" value="sikh" />
                        <Picker.Item label="Buddhist" value="buddhist" />
                        <Picker.Item label="Jain" value="jain" />
                        <Picker.Item label="Other" value="other" />
                        <Picker.Item label="None" value="none" />
                    </Picker>
                </View>
                <View style={{ marginVertical: 8, backgroundColor: colors.lightGray, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={[styles.grayText, { marginStart: 15, marginTop: 8 }]}>Lifestyle</Text>
                    <TextInput placeholder='Drinking' style={{ marginHorizontal: 10, borderBottomColor: colors.skyBlue, borderBottomWidth: 2 }} />
                </View>
                <View style={{ marginVertical: 8, backgroundColor: colors.lightGray, borderRadius: 10, marginHorizontal: 10 }}>
                    <Text style={[styles.grayText, { marginStart: 15, marginTop: 8 }]}>Distance</Text>
                    <Text style={[styles.splashText, { marginStart: 15, marginTop: 8, fontSize: 15 }]}>5
                        <Text style={{ color: 'black' }}> to </Text>
                        {value * 20}
                        <Text style={{ color: 'black' }}> miles</Text>
                    </Text>
                    <Slider
                        style={{ marginHorizontal: 10 }}
                        value={value}
                        onValueChange={setValue}
                        maximumValue={50}
                        minimumValue={1}
                        step={1}
                        trackStyle={{ height: 5, backgroundColor: colors.skyBlue }}
                        thumbStyle={{ height: 20, width: 20, backgroundColor: colors.skyBlue }}
                    />

                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                        <CheckBox
                            // defaultIsChecked={checked}
                            style={{ width: 22, height: 22 }}
                            checked={checked}
                            onPress={() => setCheckbox(!checked)}
                        />
                        <Text style={{ marginLeft: 20 }}>More than 1000 miles (Global)</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center' }} >

                    <TouchableOpacity onPress={() => props.render(false)} style={{
                        alignSelf: 'flex-start', alignItems: 'center',
                        justifyContent: 'center', height: 50, width: 50, backgroundColor: colors.skyBlue, borderRadius: 100
                    }}>
                        <FontAwesome5Icon name='angle-right' color={colors.white} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.visible(false)} style={{
                        backgroundColor: colors.skyBlue, borderRadius: 20, alignSelf: 'flex-end',
                        paddingVertical: 10, paddingHorizontal: 30, marginVertical: 10, marginRight: 30
                    }}>
                        <Text style={[styles.splashWhiteText, { fontSize: 18 }]}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default PaidFilter;
