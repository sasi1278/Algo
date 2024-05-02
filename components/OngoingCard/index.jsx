import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
const OngoingCard = ({ mainText, Name, imageUrl,numberOfLessons, percentCompletion }) => {
  return (
    <TouchableOpacity onPress={()=>{}} style={styles.container}>
        <Image source={{uri:imageUrl}} style={styles.image}/>
        <View style={{flex:1,}}>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.mainText}>
                        {mainText}
                    </Text>
                    <Text style={styles.subText}>
                        {Name}
                    </Text>
                </View>
                <Entypo name="dots-three-horizontal" size={20} color="black" />
            </View>
            <View style={styles.text}>
                <Text style={styles.subText}>
                    {numberOfLessons} lessons
                </Text>
                <Text style={styles.subText}>
                    {percentCompletion}% complete
                </Text>
            </View>
            <View style={styles.progressBar}>
                <View style={{height: '100%',width:`${percentCompletion}%`,backgroundColor:"black"}} />
            </View>
            
        </View>
    </TouchableOpacity>
  )
};


export default OngoingCard;
