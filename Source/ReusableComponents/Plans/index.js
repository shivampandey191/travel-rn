import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colors } from '../../Assets/Constants/colors'
import styles from '../../Assets/Css'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';


const plans = (props) => {
    const [planBox, setPlanBox] = useState('2');
    return (
        <View style={{ marginTop: 10, width: wp('90%'), elevation: 5, borderRadius: 20, alignSelf: 'center', backgroundColor: colors.white }}>
            <View style={{ backgroundColor: colors.skyBlue }}>
                <Text style={[styles.splashWhiteText, { fontSize: 25, marginTop: 20 }]}>Get Window Seat Plus </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, paddingHorizontal: 30 }}>
                    <View style={{ alignItems: 'center', width: wp('20%') }}>
                        <View style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5Icon solid={true} name='heart' color='red' size={40} />
                        </View>
                        <Text style={[styles.splashWhiteText, { fontSize: 16 }]}>Unlimited</Text>
                        <Text style={[styles.splashWhiteText, { fontSize: 16 }]}>Likes</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5Icon solid={true} name='comment-dots' color={colors.skyBlue} size={40} />
                        </View>
                        <Text style={[styles.splashWhiteText, { fontSize: 16 }]}>Daily Chat</Text>
                        <Text style={[styles.splashWhiteText, { fontSize: 16 }]}>No Limit</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: 80, height: 80, borderRadius: 80, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center' }}>
                            <FontAwesome5Icon solid={true} name='map-marker-alt' color='gray' size={40} />
                        </View>
                        <Text style={[styles.splashWhiteText, { fontSize: 16 }]}>No Distance</Text>
                        <Text style={[styles.splashWhiteText, { fontSize: 16 }]}>Limit</Text>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: colors.white, width: wp('90%'), justifyContent: 'center', padding: 10, alignItems: 'center', marginBottom: 20 }}>
                <View style={{ backgroundColor: colors.white, width: wp('90%'), justifyContent: 'space-around', paddingVertical: 15, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => setPlanBox('1')} style={{ borderWidth: 2, marginHorizontal: 5, flex: 1, paddingVertical: 15, borderColor: planBox === '1' ? colors.skyBlue : colors.gray, alignItems: 'center' }}>
                        <Text style={styles.grayText}>12</Text>
                        <Text style={styles.grayText}>Months</Text>
                        <Text style={[styles.grayText, { fontSize: 13 }]}>Rs 1000/month</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPlanBox('2')} style={{ borderWidth: 2, marginHorizontal: 5, flex: 1, paddingVertical: 15, borderColor: planBox === '2' ? colors.skyBlue : colors.gray, alignItems: 'center' }}>
                        <Text style={{ color: colors.white, fontSize: 12, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 3, backgroundColor: colors.skyBlue, borderRadius: 8, position: 'absolute', top: -9, alignSelf: 'center' }}>Most Popular</Text>
                        <Text style={styles.grayText}>6</Text>
                        <Text style={styles.grayText}>Months</Text>
                        <Text style={[styles.grayText, { fontSize: 13 }]}>Rs 1200/month</Text>
                        <Text style={[styles.grayText, { color: 'red', fontSize: 13, marginTop: 10 }]}>Save UpTo 51%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPlanBox('3')} style={{ borderWidth: 2, marginHorizontal: 5, flex: 1, paddingVertical: 15, borderColor: planBox === '3' ? colors.skyBlue : colors.gray, alignItems: 'center' }}>
                        <Text style={styles.grayText}>1</Text>
                        <Text style={styles.grayText}>Months</Text>
                        <Text style={[styles.grayText, { fontSize: 13 }]}>Rs 400/month</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.btn, { paddingHorizontal: 40 }]}
                    onPress={() => props.visible(false)}>
                    <Text style={[styles.textStyle, { fontSize: 18 }]}>Continue</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default plans
