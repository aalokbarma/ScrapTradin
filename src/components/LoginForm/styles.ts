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
        marginBottom: 10
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
        color: Colors.majorText,
        fontWeight: '600',
      },
      input: {
        borderWidth: 1,
        borderColor: Colors.Color6,
        borderRadius: 5,
        paddingVertical: 10,
        backgroundColor: Colors.background,
        color: Colors.majorText,
        paddingHorizontal: 10,
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
      heading: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.buttonPrimary,
        marginBottom: 15,
      },
      headingText: {
        fontSize: 24,
        color: Colors.buttonPrimary,
        fontWeight: '700',
        paddingBottom: 10,
      },
      signUpButtonContainer: {
        marginTop: 20,
      },
      scrollView: {
        marginHorizontal: Dimensions.get('window').width * 0.05,
      },
      bottomContainer: {
        width: Dimensions.get('window').width * 0.9,
        marginBottom: 50
      },
      signUpContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 15
      },
      notAUserText: {
        fontSize: 16,
        color: Colors.majorText,
        fontWeight: '400',
        marginRight: 5
      },
      signUpText: {
        fontSize: 18,
        color: Colors.minorText,
        fontWeight: '600',
        textDecorationLine: 'underline'
      },
      forgetButtonContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 5,
      },
      forgetPasswordText: {
        fontSize: 14,
        color: Colors.buttonPrimary,
        fontWeight: '500',
      },
      passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.buttonPrimary,
        borderRadius: 5,
        paddingRight: 10,
        backgroundColor: Colors.background,
      },
      icon: {
        marginLeft: 10
      },
      input1: {
        flex: 1,
        backgroundColor: Colors.background,
        color: Colors.majorText,
        paddingHorizontal: 10,
        borderRadius: 15,
      }
});

export default Styles;