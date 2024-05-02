import { StyleSheet } from "react-native";
import { height, width } from "../../assets/dimensions";

const styles = StyleSheet.create({
    cardContainer: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width * 0.35,
      height: 'auto',
      padding: 10,
      borderRadius: 20,
      elevation: 4,
      marginHorizontal: 5,
      marginTop:20
    },
    contentContainer: {
      flex: 1,
    },
    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    mainText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#ffffff',
    },
    subText: {
      fontSize: 16,
      color: '#ffffff',
    },
    image: {
      width: '70%',
      height: '50%',
      borderRadius: 8,
      resizeMode: 'cover',
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
});

export default styles;
