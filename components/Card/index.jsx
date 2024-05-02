import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const Card = ({ mainText, subText, imageUrl,color }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity onPress={()=>{}} style={[styles.cardContainer,{backgroundColor:color}]}>
      <View style={styles.contentContainer}>
        <View style={styles.topRow}>
          <Text style={styles.mainText}>{mainText}</Text>
          <TouchableOpacity onPress={handleLikePress}>
            {isLiked? <AntDesign name="heart" size={20} color="white" />:<AntDesign name="hearto" size={20} color="white" />}
          </TouchableOpacity>
        </View>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <Image source={{uri:imageUrl}} style={styles.image}/>
    </TouchableOpacity>
  );
};



export default Card;
