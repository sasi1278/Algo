import { StyleSheet } from "react-native";
import { width,height } from "../../assets/dimensions";

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Add padding bottom to avoid content sticking to the bottom
  },
    mainContainer: {
      height:height*0.95,
      backgroundColor: '#000000',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal:10,
      paddingVertical:15,
      backgroundColor: '#fff',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center',
    },
    featureText:{
      fontSize: 23,
      fontWeight: 'bold',
      color: '#000',
      marginTop:10
    },
    seeText:{
      fontSize: 15,
      fontWeight: 'bold',
      color: 'blue',
    },
    ongoingText:{
      fontSize: 23,
      fontWeight: 'bold',
      color: '#000',
      marginVertical:8
    },
    itemcontainer:{
      flexDirection:'row',
      justifyContent:"space-between",
      marginHorizontal:25,
      alignItems:'center',
      marginTop:20
    },
    nameText:{
      fontSize: 15,
      fontWeight: 'bold',
      color:"#fff",
    },
    subText:{
      fontSize: 13,
      color:"silver"
    },
    image:{
      width: width*0.1,
      height:width*0.1,
      resizeMode: 'contain',
      alignSelf:"center",
      borderRadius: width*0.05,
    }
});

  export default styles