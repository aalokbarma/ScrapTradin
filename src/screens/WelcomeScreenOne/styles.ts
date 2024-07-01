import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%'
      },
      image: {
        width: 400,
        height: 300,
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: Colors.majorText,
        width: '85%',
        marginTop: '20%',
        textTransform: 'uppercase',
      },
      subtitle: {
        fontSize: 16,
        color: Colors.minorText,
        textAlign: 'center',
        width: '90%',
        letterSpacing: 0.5,
        marginTop: '10%'
      },
      swiper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      },
      activeDot: {
        backgroundColor: '#000',
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      },
      slide: {
        backgroundColor: 'transparent',
      },
      skipButtonContainer: {
        width: '100%',
        height: 'auto',
        paddingVertical: 15,
        marginBottom: '-20%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
      },
      skipButton: {
        backgroundColor: Colors.Color6,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
      },
      skipButtonText: {
        fontSize: 14,
        fontWeight: '700', 
        color: Colors.background,
      },
      bottomBarsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection :'column',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: '20%',
        paddingHorizontal: 15,

      },
      backButtonContainer: {
        flex: 0.2,
        
      },
      backButton: {
        width: '100%',
        paddingVertical: 7,
        backgroundColor: Colors.Color7,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      backButtonText:{
        fontSize: 16,
        fontWeight: '700', 
        color: Colors.background,
        textTransform: 'uppercase'
      },
      nextButtonContainer: {
        marginTop: 25,
      },
      nextButton: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: Colors.Color7,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      nextButtonText:{
        fontSize: 18,
        fontWeight: '700', 
        color: Colors.background,
        textTransform: 'uppercase',
      },
      barsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      bar: {
        width: 25,
        height: 5,
        borderRadius: 10,
        backgroundColor: Colors.Color4,
        marginHorizontal: 1
      },
      activeBar: {
        width: 50,
        height: 5,
        borderRadius: 10,
        backgroundColor: Colors.Color5,
        marginHorizontal: 1
      },
      completedBar: {
        width: 25,
        height: 5,
        borderRadius: 10,
        backgroundColor: Colors.Color3,
        marginHorizontal: 1
      },
});

export default Styles;