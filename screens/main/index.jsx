import React from 'react';
import { Text,View ,ImageBackground,TouchableOpacity} from 'react-native';
import styles from './styles';
import { online } from '../../assets';
const MainScreen=({changeShow})=>{
    return(
        <View style={styles.container}>
           <ImageBackground source={online} style={styles.image}>
              <View style={styles.overlay}>
                <Text style={styles.text}>Learn anything,</Text>
                <Text style={styles.text}>anywhere</Text>
                <TouchableOpacity
                        style={styles.touchable}
                        onPress={changeShow}>
                        <Text style={styles.tochbleText}>Get Started</Text>
                    </TouchableOpacity>
              </View>
           </ImageBackground>
        </View>
    )
}

export default MainScreen