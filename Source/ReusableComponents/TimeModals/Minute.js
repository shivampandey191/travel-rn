import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from '../../Assets/Css';
import { colors } from '../../Assets/Constants/colors';
import { FlatList } from 'react-native-gesture-handler';

const
    Minute = (props) => {
        const [minute, setMinute] = useState([]);

        const minuteArr = () => {
            var arr = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
            for (let i = 10; i < 60; i++) {
                arr.push(i.toString())
            }
            setMinute(arr);
        }
        useEffect(() => {
            minuteArr();
        }, [])

        return (

            <View style={{
                height: hp('80%'),
                alignSelf: 'center',
                elevation: 5,
                paddingBottom: 15,
                backgroundColor: 'white',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
            }}>
                <FlatList
                    data={minute}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => props.selectMinute(false, item)}
                            style={{ backgroundColor: colors.lightGray, padding: 10, paddingHorizontal: 20, alignItems: 'center', borderRadius: 7, marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )
    }

export default Minute;
