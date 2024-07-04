import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    homeScreen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Colors.background
    },
    topImageContainer: {
        width: '100%',
        height:'20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    logoImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    mainContentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    headingtext: {
        fontSize: 28,
        fontWeight: '500',
        textDecorationLine: 'underline',
        color: Colors.Color2,
        marginBottom: 35,
        backgroundColor: Colors.background,
        elevation: 10,
        paddingHorizontal: 10,
    },
    majorText: {
        fontSize: 35,
        fontWeight: '900',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: Colors.buttonPrimary,
        backgroundColor: Colors.background,
        elevation: 10,
        paddingHorizontal: 10,
    },
    minorText: {
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: Colors.minorText,
        backgroundColor: Colors.background,
        elevation: 10,
        paddingHorizontal: 10,
    },
    pickupButtonContainer: {
        width: '100%',
        paddingVertical: 25,
        paddingHorizontal: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.4,
    },
    pickupButton: {
        width: '100%',
        backgroundColor: Colors.buttonPrimary,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    pickupText: {
        color: Colors.background,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
});

export default Styles;