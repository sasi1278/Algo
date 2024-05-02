import React from 'react';
import { FlatList,View,Text,KeyboardAvoidingView,Platform,Image ,ScrollView} from 'react-native';
import Card from '../../components/Card';
import cardsData from  '../../assets/cards.json';
import OngoingCard from '../../components/OngoingCard';
import ongoingTasks from '../../assets/ongoingTask.json';
import SearchComponent from '../../components/Search';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const renderCard = ({ item }) => (
    <Card
      mainText={item.mainText}
      subText={item.subText}
      imageUrl={item.imageUrl}
      color={item.color}
    />
  );

  const renderCardItem=({item})=>(
    <OngoingCard 
      mainText={item.mainText}
      Name={item.Name}
      imageUrl={item.image}
      numberOfLessons={item.numberOfLessons}
      percentCompletion={item.percentCompletion}
    />
  )

  return (
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.itemcontainer}>
            <View style={{flexDirection:'row'}}>
            <Image source={{uri:'https://tse4.mm.bing.net/th?id=OIP.jiOq7perhtiuSQLsK6C8bwHaHa&pid=Api&P=0&h=180'}} style={styles.image}/>
              <View style={{alignSelf:'center',margin:10}}>
                <Text style={styles.nameText}>
                  Nika Malone
                </Text>
                <Text style={styles.subText}>
                  Student
                </Text>
              </View>
            </View>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </View>
        </View>
        <View style={styles.container}>
          <SearchComponent/>
          <View style={styles.textContainer}>
            <Text style={styles.featureText}>
                Featured courses
            </Text>
            <Text style={styles.seeText}>
                See all
            </Text>
          </View>
          <FlatList
            data={cardsData}
            renderItem={renderCard}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
          <Text style={styles.ongoingText}>
            Ongoing
          </Text>
          <FlatList
            data={ongoingTasks}
            renderItem={renderCardItem}
            keyExtractor={(item, index) => index.toString()}
            keyboardShouldPersistTaps="handled" 
            scrollEnabled={true}
          />
        </View>
      </View>
  );
};

export default HomeScreen;


