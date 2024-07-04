import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    profileScreen: {
        flex: 1,
        backgroundColor: Colors.background,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    header: {
        display: 'flex',
        padding: 15,
        borderBottomColor: Colors.buttonPrimary,
        borderBottomWidth: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        width: '100%',
    },
    contentContainer: {
        padding: 15,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent:'flex-start',
        width: '100%',
    },
    nameText: {
        fontSize: 30,
        color: Colors.buttonPrimary,
        fontWeight: "700",
    },
    phoneNumberText: {
        fontSize: 18,
        color: Colors.minorText,
        fontWeight: "500",
    },

    navigatorComponentsContainer: {
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontSize: 20,
        color: Colors.minorText,
        fontWeight: "500",
        marginLeft: 10,
    },
    rightContainer: {

    },
    separatorComponent: {
        width: '100%',
        height: 2,
        backgroundColor: Colors.placeholder1,
        marginVertical: 5,
    },
    flatlist: {
        width: '100%',
    }


});

export default Styles;