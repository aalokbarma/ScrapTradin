import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#11abeb15',
        width: Dimensions.get('window').width * 0.9,
        marginTop: "15%",
        borderRadius: 10,
    
      },
      inputContainer: {
        marginBottom: 20
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
        color: Colors.majorText,
        fontWeight: '600',
      },
      otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      otpInput: {
        borderWidth: 1,
        borderColor: Colors.buttonPrimary,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.background,
        width: 60,
        textAlign: 'center',
        fontSize: 20,
        color: Colors.buttonPrimary,
        fontWeight: "700",
      },
      button: {
        backgroundColor: Colors.buttonPrimary,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
      },
      buttonText: {
        color: Colors.background,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      resendContainer: {
        marginBottom: 20,
      },
      resendTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
      },
      minorText: {
        fontSize: 14,
        color: Colors.Color2,
        fontWeight: '400',
      },
      majorText: {
        fontSize: 18,
        color: Colors.Color6,
        fontWeight: '600',
      },


});

export default Styles;