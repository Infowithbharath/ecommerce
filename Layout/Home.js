import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import CategorySlider from '../component/screens/categoryslider';
import Banner from '../component/screens/Banner';

const Home = () => {
  const navigation = useNavigation();
  const [specialDeals, setSpecialDeals] = useState([]);

  useEffect(() => {
    // Fetch special deals from backend
    fetchSpecialDeals();
  }, []);

  const fetchSpecialDeals = async () => {
    // Mock data for special deals
    const specialDealsData = [
      {
        id: 1,
        name: "Special Deal 1",
        description: "This is a special deal for product 1",
        imageUrl: "https://example.com/product1.jpg",
        discount: 20,
      },
      {
        id: 2,
        name: "Special Deal 2",
        description: "This is a special deal for product 2",
        imageUrl: "https://example.com/product2.jpg",
        discount: 15,
      },
      {
        id: 3,
        name: "Special Deal 3",
        description: "This is a special deal for product 3",
        imageUrl: "https://example.com/product3.jpg",
        discount: 30,
      },
      {
        id: 4,
        name: "Special Deal 4",
        description: "This is a special deal for product 4",
        imageUrl: "https://example.com/product4.jpg",
        discount: 25,
      },
    ];

    setSpecialDeals(specialDealsData);
  };

  const handleNotificationIconPress = () => {
    navigation.navigate('Notifications');
  };

  const handleWishlistIconPress = () => {
    navigation.navigate('Wishlist');
  };

  const handleCartIconPress = () => {
    navigation.navigate('Cart'); 
  };

  const renderSpecialDealItem = ({ item }) => (
    <TouchableOpacity style={styles.specialDealItemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.specialDealImage} />
      <Text style={styles.specialDealTitle}>{item.name}</Text>
      <Text style={styles.specialDealDiscount}>{item.discount}% OFF</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header 
        handleNotificationIconPress={handleNotificationIconPress} 
        handleWishlistIconPress={handleWishlistIconPress} 
        handleCartIconPress={handleCartIconPress}
      />
      <ScrollView style={styles.scrollViewContent}>
        <ScrollView horizontal>
          <CategorySlider />
        </ScrollView>
        <Banner text="Welcome to Our Store! Explore our wide range of products."/>
        <View style={styles.specialDealsContainer}>
          <View style={styles.specialDealsHeader}>
            <Text style={styles.specialDealsTitle}>Special Deals</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SpecialDeals')}>
              <Text style={styles.viewAllLink}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={specialDeals}
            renderItem={renderSpecialDealItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.specialDealsList}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  scrollViewContent: {
    flex: 1,
  },
  specialDealsContainer: {
    paddingHorizontal: 10,
    paddingTop: 5, // Add 5px space above Special Deals
    borderBottomWidth: 1, // Horizontal line below Special Deals
    borderBottomColor: '#E5E5E5', // Light gray color for the line
  },
  specialDealsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  specialDealsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAllLink: {
    color: 'blue',
  },
  specialDealsList: {
    paddingTop: 10,
  },
  specialDealItemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  specialDealImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  specialDealTitle: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  specialDealDiscount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 2,
  },
});

export default Home;
