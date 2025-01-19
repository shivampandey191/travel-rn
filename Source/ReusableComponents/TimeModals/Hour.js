import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../Assets/Constants/colors';
import { FlatList } from 'react-native-gesture-handler';


const Hour = (props) => {
    let hours = [
        '00', '01', '02', '03', '04', '05', '06', '07', '08',
        '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
        '19', '20', '21', '22', '23']

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
                data={hours}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => props.selectHour(false, item)}
                        style={{ backgroundColor: colors.lightGray, padding: 10, paddingHorizontal: 20, alignItems: 'center', borderRadius: 7, marginTop: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Hour;
