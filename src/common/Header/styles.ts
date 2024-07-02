import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
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
});

export default Styles;