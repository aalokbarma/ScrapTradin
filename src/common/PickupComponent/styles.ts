import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    pickupComponentContainer: {
        backgroundColor: Colors.fullWhite,
        padding: 10,
        elevation: 5,
        borderRadius: 10,
        width: '90%',
        marginVertical: 10,
        marginHorizontal: '1%',
    },
    cardLeftContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    cardRightContainer: {

    },
    cardContentContainer: {

    },
    priceText: {
        fontSize: 16,
        color: Colors.grey9,
    },
    contentImage: {
        width: 50,
        height: 50,
        objectFit: 'contain',
        borderRadius: 5,
        marginRight: 10,
    },
    cardTitleText: {
        fontSize: 20,
        color: Colors.buttonPrimary,
        fontWeight: '800',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
    },
    contentRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contentKey: {
        fontSize: 16,
        color: Colors.minorText,
        fontWeight: "500",
        marginRight: 5,
        marginVertical: 1,
    },
    contentValue: {
        fontSize: 14,
        color: Colors.minorText,
        fontWeight: "400",
    },
    statusText: {
        fontSize: 20,
        fontWeight: '600',
    }
});

export default Styles;