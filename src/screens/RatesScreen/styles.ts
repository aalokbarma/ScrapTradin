import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    ratesScreen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: Colors.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topContainer: {
        width: '100%',
        padding: 5,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: Colors.buttonPrimary,
    },
    ratesText: {
        color: Colors.buttonPrimary,
        fontSize: 28,
        fontWeight: '600',
    },
    contentContainer: {
        padding: 15,
        width: '100%',
    },
    


    // Card Start
    cardMainContainer: {
        backgroundColor: Colors.fullWhite,
        padding: 10,
        elevation: 5,
        borderRadius: 10,
        width: '98%',
        marginVertical: 5,
        marginHorizontal: '1%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        fontSize: 18,
        color: Colors.buttonPrimary,
        fontWeight: '500',
    },
    // Card End
});

export default Styles;