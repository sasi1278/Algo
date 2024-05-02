import { StyleSheet } from "react-native";
import { width,height } from "../../assets/dimensions";

const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        height:height,
        width:width,
        justifyContent: 'center',
        resizeMode:'contain',
        alignItems:'center'
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        alignSelf:'center',
    },
    overlay: {
        position:'absolute',
        bottom:height*0.05,
        textAlign:'center'
    },
    touchable:{
        backgroundColor:'#fff',
        width:width*0.9,
        borderRadius:26,
        marginTop:10
    },
    tochbleText:{
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center',
        padding:10,
    }
})
export default styles