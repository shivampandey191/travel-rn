import React, { Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../Assets/Css';
import { colors } from '../Assets/Constants/colors';
// import ImagePicker from 'react-native-image-picker';
import { ImageBackground } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

class AddPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {}
        }
    }
    render() {

        const chooseFile = () => {
            let options = {
                title: 'Select Image',
                customButtons: [
                    {
                        name: 'customOptionKey',
                        title: 'Choose Photo from Custom Option'
                    },
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };
            launchImageLibrary(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log(
                        'User tapped custom button: ',
                        response.customButton
                    );
                    alert(response.customButton);
                } else {
                    let source = response;
                    this.setState({ filePath: source })
                }
            });
        };

        return (
            <SafeAreaView>
                <StatusBar backgroundColor={colors.skyBlue} barStyle='light-content' />
                <View style={[styles.mainContainer, { backgroundColor: colors.white }]}>
                    <Text style={[styles.blackText, { marginTop: 30 }]}>Add Your Photos</Text>
                    <Text style={[styles.grayText, { fontSize: 15, marginTop: 15 }]}>You can always add or edit your photos later.</Text>
                    <Text style={[styles.grayText, { fontSize: 15 }]}>We Suggest adding atleast 3 photos to</Text>
                    <Text style={[styles.grayText, { fontSize: 15 }]}>highlight your personality and interests</Text>
                    <View style={{ width: wp('100%'), alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={styles.addPhotosBox}>
                                <TouchableOpacity>
                                    <Image resizeMode='cover' source={require('../Assets/Images/Background.png')} style={{ width: 100, height: 100, borderRadius: 15 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ position: 'absolute', right: -7, top: -7 }} >
                                    <FontAwesome5Icon solid={true} name='times-circle' size={22} color={colors.skyBlue} />
                                </TouchableOpacity>
                            </View>
                            {console.log('photo', this.state.filePath)}
                            <ImageBackground source={this.state.filePath.assets} resizeMode='cover' style={styles.addPhotosBox}>
                                <MaterialIcon onPress={chooseFile} name='add' size={90} color='gray' style={{ opacity: this.state.filePath === {} ? 1 : 0 }} />
                            </ImageBackground>
                            <View style={styles.addPhotosBox}>
                                <MaterialIcon name='add' size={90} color='gray' />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={styles.addPhotosBox}>
                                <MaterialIcon name='add' size={90} color='gray' />
                            </View>
                            <View style={styles.addPhotosBox}>
                                <MaterialIcon name='add' size={90} color='gray' />
                            </View>
                            <View style={styles.addPhotosBox}>
                                <MaterialIcon name='add' size={90} color='gray' />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.btn, styles.uploadBtn]}>
                        <Text style={[styles.splashWhiteText, { fontSize: 18 }]}>Record or Upload an Intro Video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                        style={[styles.btn, styles.continueBtn]}>
                        <Text style={[styles.splashWhiteText, { fontSize: 18 }]}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

export default AddPhotos;
