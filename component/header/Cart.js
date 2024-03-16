import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch cart contents from the backend
  const fetchCartContents = async () => {
    try {
      const response = await fetch('https://example.com/api/cart'); // Replace with your backend API endpoint
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart contents:', error);
    }
  };

  // Function to add an item to the cart
  const addItemToCart = async (_itemId) => {
    try {
      const response = await fetch('https://example.com/api/cart/add/${itemId}', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // You may need to pass additional data in the request body
      });
      // Handle response as needed
      fetchCartContents(); // Refresh cart contents after adding item
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  useEffect(() => {
    fetchCartContents(); // Fetch cart contents when component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      {cartItems.map((item) => (
        <Text key={item.id}>{item.name} - ${item.price}</Text>
      ))}
      <Button title="Add Item to Cart" onPress={() => addItemToCart(itemId)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Cart;