import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
      },
      logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 20,
      },
      buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
});

export default Styles;