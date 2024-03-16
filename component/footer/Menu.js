// Menu.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const Menu = () => {
  const [showCategories, setShowCategories] = useState(false);
  const navigation = useNavigation(); // Get the navigation object

  // Function to handle navigation to different screens
  const handleNavigation = (screenName) => {
    // Add navigation logic here
    console.log(`Navigating to ${screenName}`);
    navigation.navigate(screenName); // Navigate to the specified screen
  };

  // Function to toggle the visibility of categories
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  // Dummy data for categories with images
  const categoriesData = [
    { id: 1, name: 'Automobile', screen: 'AutomobileScreen', image: 'https://example.com/Automobile.jpg' },
    { id: 2, name: 'Women Fashion', screen: 'WomenFashionScreen',image: 'https://example.com/Women_Fashion.jpg' },
    { id: 3, name: 'Men Fashion', screen: 'MenFashionScreen', image: 'https://example.com/Men_Fashion.jpg' },
    { id: 4, name: 'Kids Fashion', screen: 'KidsFashionScreen',image: 'https://example.com/Kids_Fashion.jpg' },
    { id: 5, name: 'Electrical & Electronics',screen: 'ElectronicsScreen', image: 'https://example.com/Electrical_&_Electronics.jpg' },
    { id: 6, name: 'Sports, Fitness & Outdoor', screen: 'SportsFitnessOutdoorScreen', image: 'https://example.com/Sports_Fitness_&_Outdoor.jpg' },
    { id: 7, name: 'Computers & Gaming', screen: 'Computer&GamingScreen', image: 'https://example.com/Computers_&_Gaming.jpg' },
    { id: 8, name: 'Books, Media & Music', screen: 'BooksMediaMusicScreen', image: 'https://example.com/Books_Media_&_Music.jpg' },
    { id: 9, name: 'Daily Deals', image: 'https://example.com/Daily_Deals.jpg' },
    { id: 10, name: 'Home & Kitchen', screen: 'Home&KitchenScreen', image: 'https://example.com/Home_&_Kitchen.jpg' },
    { id: 11, name: 'Mobile & Tablets', screen: 'Screen', image: 'https://example.com/Mobile_&_Tablet.jpg' },
    { id: 12, name: "Kids' Toys", image: 'https://example.com/Kids_Toys.jpg' },
  ];

  // Render category item with image and text separated
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryButton} onPress={() => handleNavigation(item.screen)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.categoryImage} />
      </View>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <TouchableOpacity style={styles.button} onPress={toggleCategories}>
        <Text>Shop by Categories</Text>
      </TouchableOpacity>
      {/* Render categories only if showCategories is true */}
      {showCategories && (
        <View style={styles.categories}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
          />
        </View>
      )}
      {/* End of categories */}
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('SpecialDeals')}>
        <Text>Special Deals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('AllVendors')}>
        <Text>All Vendors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Review')}>
        <Text>Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Feedback')}>
        <Text>Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
  },
  categories: {
    width: '100%',
    paddingLeft: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  categoryButton: {
    backgroundColor: '#CCCCCC',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '48%', // Adjust the width based on the number of columns
    overflow: 'hidden', // Ensure that the image doesn't overflow the container
  },
  imageContainer: {
    width: '100%',
    height: 150, // Adjust the height as needed
    marginBottom: 5,
    borderRadius: 5,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 5,
  },
});

export default Menu;
