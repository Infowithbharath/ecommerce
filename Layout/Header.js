import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Header = () => {
  const appLogo = 'JTDeal'; // Replace with your actual app logo text

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation(); // Initialize navigation

  const handleSearchIconPress = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleNotificationIconPress = () => {
    navigation.navigate('Notification');
  };

  const handleWishlistIconPress = () => {
    navigation.navigate('Wishlist');
  };

  const handleCartIconPress= () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.headerContent}>
        <Text style={styles.logoText}>{appLogo}</Text>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={handleSearchIconPress}>
            <Ionicons name="md-search" size={20} color="black" />
          </TouchableOpacity>

          <View style={styles.iconSpacing} />

          <TouchableOpacity onPress={handleNotificationIconPress}>
            <FontAwesome name="bell" size={20} color="gold" />
          </TouchableOpacity>

          <View style={styles.iconSpacing} />

          <TouchableOpacity onPress={handleWishlistIconPress}>
            <FontAwesome name="heart" size={20} color="red" />
          </TouchableOpacity>

          <View style={styles.iconSpacing} />

          <TouchableOpacity onPress={handleCartIconPress}>
            <FontAwesome name="shopping-cart" size={20} color="blue" />
          </TouchableOpacity>
        </View>
      </View>

      {showSearchBar && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#888"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    width: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'black',
  },
});

export default Header;
