import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    otpScreen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Colors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    logoImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },
    topImageContainer: {
        width: '100%',
        height:'20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    

});

export default Styles;