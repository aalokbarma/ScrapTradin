import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    upcomingPickupScreen: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        width: Dimensions.get('window').width,
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
        paddingTop: 20,
    },
});

export default Styles;