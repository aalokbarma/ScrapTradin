import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#11abeb15',
        width: Dimensions.get('window').width * 0.9,
        marginTop: "25%",
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
        alignItems: 'center',
        marginTop: 25,
      },
      buttonText: {
        color: Colors.background,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
      },
      radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.buttonPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
      },
      selectedRadioCircle: {
        backgroundColor: Colors.buttonPrimary,
      },
      radioText: {
        fontSize: 16,
        color: '#333',
      },
      signInContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 15
      },
      alreadyText: {
        fontSize: 16,
        color: Colors.majorText,
        fontWeight: '400',
        marginRight: 5
      },
      signInText: {
        fontSize: 18,
        color: Colors.minorText,
        fontWeight: '600',
        textDecorationLine: 'underline'
      },
      bottomContainer: {
        width: Dimensions.get('window').width * 0.9,
        marginBottom: 50
      },
      scrollView: {
        marginHorizontal: Dimensions.get('window').width * 0.05,
      },
      checkbox: {
        margin: 0,
        padding: 0,
      },
      checkboxContainer: {
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 10,
      },
      minorText: {
        fontSize: 14,
        color: Colors.Color2,
        fontWeight: '400',
      },
      majorText: {
        fontSize: 16,
        color: Colors.Color6,
        fontWeight: '600',
        textDecorationLine: 'underline',
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

});

export default Styles