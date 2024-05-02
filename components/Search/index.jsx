import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = () => {
    console.log('Search for:', searchText);
    searchText.length>=1 ?setRecentSearches(prevSearches => [searchText, ...prevSearches]):null;
    setSearchText('')
  };

  const getBackgroundColor = (index) => {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#99ffff'];
    return colors[index % colors.length];
  };

  const renderRecentSearches = () => {
    return recentSearches.map((search, index) => (
      <TouchableOpacity key={index} style={[styles.recentSearchItem, { backgroundColor: getBackgroundColor(index) }]}>
        <Text>{search}</Text>
      </TouchableOpacity>
    ));
  };


  return (
    <View style={styles.card}>
       <View style={styles.container}>
        <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="black" />
            <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchText}
            onChangeText={text => setSearchText(text)}
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <AntDesign name="swap" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.recentSearchesContainer}>
            <Text style={styles.recentSearchTitle}>Recent</Text>
            {renderRecentSearches()}
        </View>
        </View>
    </View>
  );
};

export default SearchComponent;
