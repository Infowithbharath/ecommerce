import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const SpecialDeals = () => {
  const [deals, setDeals] = useState([]);

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

    setDeals(specialDealsData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.discount}>{item.discount}% OFF</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Special Deals</Text>
      <View style={styles.gridContainer}>
        <FlatList
          data={deals}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  gridContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
  },
  discount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});

export default SpecialDeals;
