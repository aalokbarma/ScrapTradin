import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    privacyPolicyScreen: {
        backgroundColor: Colors.background,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    header: {
        width: '100%',
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderBottomColor: Colors.buttonPrimary,
        borderBottomWidth: 1,
    },
    headerLeftContainer: {
        width: 40,
        borderRightColor: Colors.buttonPrimary,
        borderRightWidth: 2,
    },
    backButton: {
        
    },
    headerHeadingContainer: {
        paddingLeft: 15,
    },
    headingText: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.buttonPrimary
    },
    contentContainer: {
        flex: 1,
        width: '100%',
        padding: 15,
    },
    titleText: {
        fontSize: 18,
        color: Colors.Color2,
        fontWeight: '700',
        marginVertical: 5,
    },
    majorText: {
        fontSize: 16,
        color: Colors.Color2,
        fontWeight: '700',
        marginTop: 10,
    },
    minorText: {
        fontSize: 14,
        color: Colors.Color2,
        fontWeight: '400',
        textAlign: 'justify',
    },
    textPoints: {
        fontSize: 14,
        color: Colors.Color2,
        fontWeight: '400',
        textAlign: 'justify',
    },
    boldText: {
        fontWeight: '500'
    },
    contactsTexts: {
        fontSize: 14,
        color: Colors.Color2,
        fontWeight: '500',
        marginTop: 5,
    },
    endElement: {
        marginBottom: 50,
    }


});

export default Styles;