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
import { FlatList } from 'react-native-gesture-handler';



const Ampm = (props) => {
    const [visible, setVisible] = useState(false);
    const [gender, setGender] = useState();
    const [value, setValue] = useState(20);

    const setModalVisible = (visible) => {
        setVisible(visible);
    }

    let ampm = [
        'AM', 'PM'
    ]

    return (

        <View style={{ height: hp('100%'), width: wp('100%'), alignSelf: 'center', elevation: 5, paddingBottom: 15, backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
            <FlatList
                data={ampm}
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

export default Ampm;
