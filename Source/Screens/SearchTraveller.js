import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { Text, View } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../Assets/Constants/colors'
import styles from '../Assets/Css';
// import { Dropdown } from 'react-native-material-dropdown';
// import DropdownMenu from 'react-native-dropdown-menu';
import ModalDropdown from 'react-native-modal-dropdown';
import { TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'



class SearchTraveller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [],
        }
    }
    render() {
        var data = ["New Delhi", "Mumbai", "Jaipur", "Manali", "Hyderabad", "Kolkata", "Bangalore", "Chandigarh", "Lucknow"];
        return (
            <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.white, padding: 15 }}>
                    <TouchableOpacity>
                        <MaterialIcon name='close' size={35} color={colors.gray} />
                    </TouchableOpacity>
                    <Text style={[styles.grayText, { fontSize: 22 }]}> Search </Text>
                </View>
                <View style={{ padding: 10, width: widthPercentageToDP('90%'), alignSelf: 'center', backgroundColor: colors.lightGray }}>
                    <Text style={[styles.grayText, { marginBottom: 5 }]}>Location</Text>
                    <ModalDropdown options={data}
                        defaultTextStyle={{ fontSize: 20 }}
                        defaultValue={'Select Location'}
                        textStyle={{ fontSize: 20, fontWeight: 'bold' }}
                        dropdownTextStyle={{ fontSize: 20 }}
                    // renderRightComponent={<View> <FontAwesome5Icon name='caret-down' size={15} color='gray' /> </View>}
                    >

                    </ModalDropdown>
                </View>
                <View style={{ padding: 10, marginTop: 15, width: widthPercentageToDP('90%'), alignSelf: 'center', backgroundColor: colors.lightGray }}>
                    <Text style={[styles.grayText, { marginBottom: 5 }]}>Date</Text>
                    <DatePicker
                        style={{ width: 200, color: 'black' }}
                        date={this.state.date}
                        customStyles={{ dateText: { color: colors.black, fontWeight: 'bold', fontSize: 16 }, placeholderText: { color: colors.black, fontSize: 16, fontWeight: 'bold' } }}
                        mode="date"
                        showIcon={false}
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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('FavFood')} style={[styles.btn, { paddingVertical: 10, width: widthPercentageToDP('90%'), position: 'absolute', bottom: 30 }]}>
                    <Text style={[styles.splashWhiteText, { fontWeight: 'bold', fontSize: 20, marginHorizontal: 30 }]}>Search</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default SearchTraveller
