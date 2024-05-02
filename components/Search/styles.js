import { StyleSheet } from "react-native";
import { height,width } from "../../assets/dimensions";
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        height:'auto',
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    container: {
      padding: 5,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    input: {
      flex: 1,
      borderRadius: 5,
      padding: 5,
    },
    searchButton: {
      marginLeft: 10,
    },
    separator: {
      height: 1,
      backgroundColor: '#ccc',
      marginBottom: 10,
    },
    recentSearchesContainer: {
      paddingTop: 5,
      flexDirection:"row",
      justifyContent:"space-between",
      flexWrap:"wrap",
    },
    recentSearchTitle: {
      fontWeight: 'bold',
    },
    recentSearchItem: {
      width:"auto",
      height:"auto",
      paddingHorizontal:10,
      borderRadius: 15,
      paddingVertical:5,      
    },
  });

  export default styles