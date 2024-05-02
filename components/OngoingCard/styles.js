import { StyleSheet,Platform } from "react-native";
import { width,height } from "../../assets/dimensions";
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection:"row",
        height:'auto',
        borderRadius: 15,
        marginVertical:10,
        marginHorizontal:2,
        padding:10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    contentContainer: {
        flexDirection:'row',
        justifyContent:"space-between",
        marginVertical:20,
        marginHorizontal:10
    },
    progressBar: {
        height: 5,
        width: '90%',
        backgroundColor: '#f0f0f5',
        overflow: 'hidden',
        marginHorizontal:10
    },
    image: {
        width: width*0.2,
        height:width*0.2,
        resizeMode: 'contain',
        alignSelf:"center",
        borderRadius: width*0.1,
    },
    text:{
        flexDirection:"row",
        width:"90%",
        justifyContent:"space-between",
        marginHorizontal:10,
        marginBottom:5
    },
    mainText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 13,
    },
});
  
export default styles;
  