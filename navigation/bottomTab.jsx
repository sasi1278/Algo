import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text,StyleSheet } from 'react-native';
import HomeScreen from '../screens/home';
import Sample from '../screens/sample';
import SampleOne from '../screens/sampleOne';
import SampleTwo from '../screens/sampleTwo';
import { Ionicons } from '@expo/vector-icons';
import { height } from '../assets/dimensions';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return null;
          },
          tabBarLabel: ({ focused, color }) => {
            let label;
            let iconName;
            let textColor = focused ? 'white' : 'black';

            if (route.name === 'Home') {
              label = 'Home';
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Sample') {
              label = 'Sample';
              iconName = focused ? 'bag-check' : 'bag-check-outline';
            } else if (route.name === 'Sample1') {
              label = 'Sample1';
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'Sample2') {
              label = 'Sample2';
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return (
              <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: focused ? '#000000' : 'transparent', borderRadius: focused ? 5 : 0,padding:5}}>
                <Ionicons name={iconName} size={20} color={textColor} />
                {focused && <Text style={{ marginLeft: 3,color:textColor }}>{label}</Text>}
              </View>
            );
          },
        })}
        tabBarStyle={{ justifyContent: 'center', alignItems: 'center'}}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Sample" component={Sample} options={{ headerShown: false }} />
        <Tab.Screen name="Sample1" component={SampleOne} options={{ headerShown: false }} />
        <Tab.Screen name="Sample2" component={SampleTwo} options={{ headerShown: false }} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height:height,
        marginHorizontal: 15,
    }
  });

export default BottomTabNavigator;
