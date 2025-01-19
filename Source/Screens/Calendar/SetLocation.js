import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../Assets/Css';
import { colors } from '../../Assets/Constants/colors';
import { FlatList } from 'react-native-gesture-handler';

const SetLocation = (props) => {

    let location = [
        'New Delhi', 'Mumbai', 'Dehradun', 'Chandigarh', 'Lucknow', 'Shimla', 'Manali', 'Mussoorie',
        'Bangalore', 'Kolkata', 'Chennai', 'Pune', 'Nagpur', 'Hyderabad']

    return (
        <View style={{ height: hp('100%'), width: wp('100%'), alignSelf: 'center', elevation: 5, paddingBottom: 15, backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => props.visible(false)}>
                    <MaterialIcon name='close' size={30} color='black' />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, margin: 10, color: 'black' }}>My Preferences</Text>
            </View>
            <FlatList
                data={location}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.selectLocation(false, item)}
                        style={{ backgroundColor: colors.lightGray, padding: 10, borderRadius: 7, marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 30 }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default SetLocation;
