import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#11abeb15',
        width: Dimensions.get('window').width * 0.9,
        marginTop: 25,
        borderRadius: 10,
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
        fontSize: 16,
      },
      datePickerButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.Color6,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: Colors.background,
        fontSize: 14,
        paddingVertical: 15,
      },
      datePickerText: {
        fontSize: 16,
        color: '#333',
      },
      datePicker: {
        backgroundColor: 'red',
      },
      inputContainer: {
        marginBottom: 10
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

export default Styles;