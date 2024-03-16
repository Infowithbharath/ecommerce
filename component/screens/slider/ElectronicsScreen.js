import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const demoProducts = [
  { id: 1, name: 'Car 1', price: '$10000', imageUrl: 'https://example.com/product1.jpg' },
  { id: 2, name: 'Car 2', price: '$15000', imageUrl: 'https://example.com/product1.jpg' },
  { id: 3, name: 'Car 3', price: '$12000', imageUrl: 'https://example.com/product1.jpg' },
  { id: 4, name: 'Car 4', price: '$20000', imageUrl: 'https://example.com/product1.jpg' },
  // Add more demo products as needed
];

const ElectronicsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={demoProducts}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background color similar to Flipkart
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color for product item
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#007bff', // Color similar to Flipkart price color
  },
});

export default ElectronicsScreen;
