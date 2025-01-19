import color from 'color';
import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../../Assets/Constants/colors';
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    //splash screen
    splashBg: {
        height: '100%',
        width: '100%',
    },
    splashText: {
        fontSize: 35,
        fontFamily: 'lumierarough',
        fontWeight: 'bold',
        color: colors.skyBlue,
        elevation: 3
    },
    splashWhiteText: {
        fontSize: 13,
        color: colors.white,
        alignSelf: 'center',
        fontFamily: 'lumierarough',
        fontWeight: 'bold',
        elevation: 3
    },
    fbButtonContainer: {
        width: wp('65%'),
        borderRadius: 35,
        padding: 10,
        alignSelf: 'center',
        marginTop: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 5
    },
    line: {
        height: 2,
        width: '60%',
        backgroundColor: colors.skyBlue,
        alignSelf: 'center',
        marginTop: 5
    },
    splashMainContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: hp('100%'),
        width: wp('75%'),
        alignSelf: 'center'
    },
    cloudMainContainer: {
        height: 80,
        width: 60,
        backgroundColor: colors.skyBlue,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center'
    },
    cloudContainer: {
        height: 60,
        width: 45,
        backgroundColor: colors.skyBlue,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: 20,
        justifyContent: 'center'
    },
    //email Verify
    mainContainer: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: colors.white
    },
    forwardBtn: {
        height: 55,
        width: 55,
        borderRadius: 30,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.skyBlue,
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    backwardBtn: {
        height: 55,
        width: 55,
        borderRadius: 30,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.skyBlue,
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    topTextContainer: {
        marginTop: 40,
        width: wp('90%'),
        alignItems: 'center'
    },
    progressBarText: {
        color: 'gray',
        fontSize: 17,
        marginBottom: 5,
        alignSelf: 'flex-start'
    },
    middleContainer: {
        marginTop: hp('35%'),
        width: wp('90%'),
        paddingHorizontal: 15
    },
    inputText: {
        width: wp('65%'),
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.skyBlue,
        borderBottomWidth: 1
    },
    textInputBox: {
        backgroundColor: colors.white,
        borderRadius: 30,
        borderWidth: 0.2,
        borderColor: colors.darkGray,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 15,
        height: hp('8%'),
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    btn: {
        backgroundColor: colors.skyBlue,
        borderRadius: 30,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginTop: 30,
        alignSelf: 'center'
    },
    //profile
    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 100,
        marginTop: 20
    },
    grayText: {
        fontSize: 18,
        color: 'gray',
        fontWeight: 'bold'
    },
    blackText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    LowerBtns: {
        width: wp('100%'),
        height: hp('7%'),
        backgroundColor: '#EDEDE8',
        marginTop: 6,
        justifyContent: 'center'
    },
    lowerBtnsTO: {
        flexDirection: 'row',
        height: hp('6%'),
        marginLeft: wp('12%'),
        alignItems: 'center'
    },
    matchesImage: {
        height: 80,
        width: 80,
        borderRadius: 100,
    },
    addPhotosBox: {
        width: 100,
        height: 100,
        borderRadius: 15,
        elevation: 5,
        backgroundColor: '#EDEDE9',
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    //modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: colors.skyBlue,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    //calendar
    timeContainer: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 3,
        paddingHorizontal: 4,
        marginHorizontal: 5
    },
    timeText: {
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 17
    },
    matches: {
        width: wp('95%'),
        backgroundColor: colors.lightGray,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderRadius: 15
    },
    matchesInner: {
        backgroundColor: '#e8e8e8',
        marginTop: 6,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 15
    },
    continueBtn: {
        position: 'absolute',
        paddingHorizontal: 20,
        bottom: 15,
        right: 15
    },
    uploadBtn: {
        width: wp('80%'),
        borderWidth: 1,
        borderColor: 'blue'
    },
    postMainContainer: {
        width: wp('90%'),
        elevation: 5,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 25,
        margin: 10
    },
    postHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    postImage: {
        marginTop: 5,
        width: '100%',
        height: 200,
        borderRadius: 15
    },
    flatlistContainer: {
        backgroundColor: colors.white,
        width: wp('100%'),
        height: hp('66%'),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingTop: 15
    },
    likeComment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 15
    },
    communityBottom: {
        elevation: 4,
        height: hp('18%'),
        backgroundColor: colors.white,
        borderRadius: 25,
        margin: 6
    },
    communityBottomImg: {
        width: windowWidth / 3.5,
        height: 70,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    communityBottomInner: {
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    communityBottomCntnr: {
        backgroundColor: colors.white,
        width: wp('100%'),
        alignItems: 'center',
    },
    homeImg: {
        width: (windowWidth / 2) - 20,
        height: (windowHeight / 4) + 20,
        overflow: 'hidden',
        borderRadius: 15,
        marginHorizontal: 5,
        marginTop: 5
    },
    homeContainer: {
        backgroundColor: colors.white,
        width: windowWidth,
        height: hp('86%'),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15
    },
    notificationCount: {
        borderWidth: 1,
        padding: 2,
        borderColor: colors.skyBlue,
        borderRadius: 40,
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    notification: {
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100
    },
    star: {
        padding: 4,
        borderRadius: 50,
        backgroundColor: colors.white,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    user: {
        position: 'absolute',
        bottom: 5,
        paddingLeft: 8
    },
    homeHeader: {
        height: hp('8%'),
        width: wp('100%'),
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})
export default styles;