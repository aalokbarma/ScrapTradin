import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    myAddressesScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.background,
    },
    addressCard: {
        backgroundColor: Colors.fullWhite,
        paddingVertical: 10,
        elevation: 5,
        borderRadius: 10,
        width: '90%',
        marginVertical: 15,
        paddingHorizontal: 15,
        minWidth: '90%',
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
        maxWidth: '100%',
    },
    contentValue: {
        fontSize: 14,
        color: Colors.minorText,
        fontWeight: "400",
    },
    statusText: {
        fontSize: 20,
        fontWeight: '600',
    },
    noContentContainer: {
        display: 'flex',
        width: '100%',
        height: 'auto',
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noContentsText: {
        width: '80%',
        fontSize: 22,
        color: Colors.placeholder1,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
    },
    flatlist: {
        width: '100%',
        display: 'flex',

    },
});

export default Styles;