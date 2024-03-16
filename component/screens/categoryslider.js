// CategorySlider.js

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';

const categories = [
  { name: 'AUTOMOBILE', screen: 'AutomobileScreen'}, //image: require('../assets/automobile.jpg') 
  { name: 'WOMEN FASHION', screen: 'WomenFashionScreen'},// image: require('../assets/women_fashion.jpg') },
  { name: 'MEN FASHION', screen: 'MenFashionScreen'},//image: require('../assets/men_fashion.jpg') },
  { name: 'KIDS FASHION', screen: 'KidsFashionScreen'},
  { name: 'ELECTRONICS', screen: 'ElectronicsScreen'},
  { name: 'SPORTS,FITNESS & OUTDOOR', screen: 'SportsFitnessOutdoorScreen'},
  { name: 'COMPUTERS & GAMING', screen: 'Computer&GamingScreen'},
  { name: 'BOOKS,MEDIA & MUSIC', screen: 'BooksMediaMusicScreen'},
  { name: 'HOME & KITCHEN', screen: 'Home&KitchenScreen'},
  { name: 'MOBILE & TABLETS', screen: 'Mobile&TabletsScreen'},
  { name: 'KIDS-TOYS ', screen: 'KidsToysScreen'},
  { name: 'DAILY NEEDS', screen: 'DailyNeedsScreen'},
  { name: 'MACHINERY & EQUIPMENT', screen: 'Machinery&EquipmentScreen'},
  { name: 'AGRICULTURAL PRODUCTS', screen: 'AgriculturalProductsScreen'}, 
  { name: 'HANDICRAFTS ', screen: 'HandicraftsScreen'},

];

const CategorySlider = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (screenName) => {
    navigation.navigate(screenName);
  };
  
    const renderItem = ({ item }) => (
      <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item.screen)}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Text style={styles.categoryName} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    categoryItem: {
      alignItems: 'center',
      marginRight: 20,
    },
    imageContainer: {
      width: 50,
      height: 50,
      borderRadius: 40, // Make it a circle
      overflow: 'hidden',
      marginBottom: 10,
      borderWidth: 2,
      borderColor: '#ccc', // Border color for the circle
    },
    image: {
      width: '100%',
      height: '100%',
    },
    categoryName: {
      fontSize: 10,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default CategorySlider;