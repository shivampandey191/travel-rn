import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Keyboard } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import database from '@react-native-firebase/database'


export default function Firebase() {

    const [nameList, setNameList] = useState([]);
    const [name, setName] = useState('');

    function readFunction() {
        database()
            .ref('Data')
            .on('value', snapshot => {
                var main = [];
                snapshot.forEach((child) => {
                    console.log('child value', child.val());
                    main.push({
                        key: child.val(),
                    })
                })
                setNameList(main)
            });
    }

    function addName(name) {
        console.log('Button Pressed')
        if (name !== '') {
            database()
                .ref('Data')
                .push({
                    name
                });
            console.log('database Changed', name)
        }
        Keyboard.dismiss();
        console.log('Name Added=', name);
        setName('');
    }

    useEffect(() => {
        readFunction()
    }, []);

    const separator = () => {
        return (
            <View
                style={{ height: 1, backgroundColor: 'black' }}
            />)
    }

    const renderItem = ({ item, index }) => (
        <View style={[styles.flatlistItem, { backgroundColor: index % 2 != 0 ? '#ccc' : 'white' }]}>
            <Text numberOfLines={1} style={[styles.text, { fontSize: hp('2.2%') }]}>{item.key.name}</Text>
        </View>
    )

    return (
        <View style={styles.mainCntnr} >
            <KeyboardAvoidingView style={styles.mainCntnr} behavior='height'>
                <Text style={[styles.text, { marginTop: hp('3%') }]}>My First Firebase App </Text>
                <View style={styles.flatlistCntnr}>{nameList.length > 0 ?
                    <View style={{ borderWidth: 1, borderColor: '#000' }}>
                        <FlatList
                            data={nameList}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={separator}
                            renderItem={renderItem}
                        />
                    </View> :
                    <View style={[styles.flatlistItem, { backgroundColor: '#ccc' }]}>
                        <Text style={[styles.text, { fontSize: hp('2.2%') }]}>No Names Added</Text>
                    </View>
                }
                </View>
                <View style={styles.bottomCntnr}>
                    <Text style={styles.text}>Add a New Name</Text>
                    <TextInput
                        value={name}
                        style={styles.input}
                        placeholder='Enter a name'
                        onChangeText={(text) => setName(text)} />
                    <TouchableOpacity style={styles.button} onPress={() => addName(name)} >
                        <Text style={[styles.text, { fontSize: hp('2.7%') }]}>Add Name</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}


const styles = StyleSheet.create({
    mainCntnr: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center'
    },
    text: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: '#000'
    },
    flatlistCntnr: {
        width: wp('80%'),
        height: hp('53%'),
        marginTop: hp('3%'),
    },
    flatlistItem: {
        alignItems: 'center',
        padding: hp('2%'),
    },
    bottomCntnr: {
        position: 'absolute',
        bottom: hp('5%'),
        alignItems: 'center',
        borderWidth: hp('0.2%'),
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('10%'),
        height: hp('30%'),
        justifyContent: 'space-around',
        marginTop: hp('3%'),
        backgroundColor: 'white'
    },
    input: {
        fontSize: hp('2.2%'),
        fontWeight: 'bold',
        paddingHorizontal: hp('2%'),
        borderWidth: hp('0.2%'),
        width: wp('65%'),
    },
    button: {
        borderWidth: hp('0.2%'),
        borderColor: '#000',
        paddingVertical: hp('1.2%'),
        paddingHorizontal: wp('5%')
    },
})