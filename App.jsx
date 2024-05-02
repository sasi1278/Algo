import React,{useState} from 'react';
import { SafeAreaView,StyleSheet,StatusBar, View} from 'react-native';
import HomeScreen from './screens/home';
import MainScreen from './screens/main';
import BottomTabNavigator from './navigayion/bottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { height } from './assets/dimensions';

const YourComponent = () => {
  const [isShow,setIsShow]=useState(true);
  const changeShow=()=>{
    setIsShow(false)
  }
  
  return (
     <SafeAreaView style={styles.container}>
      <StatusBar/>
      {isShow? 
      <MainScreen changeShow={changeShow}/>
      :
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
      }
      
    </SafeAreaView>
  );
};

export default YourComponent;


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000000',
    height:height
  }
});
