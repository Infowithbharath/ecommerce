import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyOrderPage = () => {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  // Fetch orders from backend when component mounts
  useEffect(() => {
    fetchOrdersFromBackend();
  }, []);

  const fetchOrdersFromBackend = () => {
    // Replace this with actual API call to fetch orders from your backend
    const mockOrders = [
      { id: 1, orderNumber: '12345', status: 'Delivered', items: ['Product A', 'Product B'], total: 100.00 },
      { id: 2, orderNumber: '54321', status: 'In Progress', items: ['Product X', 'Product Y'], total: 50.00 },
    ];
    setOrders(mockOrders);
  };

  const handleViewDetails = (order) => {
    // Navigate to the order details screen and pass the order object as a parameter
    navigation.navigate('OrderDetails', { order });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Orders</Text>

      {orders.map((order) => (
        <TouchableOpacity
          key={order.id}
          style={styles.card}
          onPress={() => handleViewDetails(order)}
        >
          <Text style={styles.orderTitle}>Order #{order.orderNumber}</Text>
          <Text style={styles.orderDetails}>Status: {order.status}</Text>
          <Text style={styles.orderDetails}>Items: {order.items.join(', ')}</Text>
          <Text style={styles.orderDetails}>Total: Rs.{order.total.toFixed(2)}</Text>
          <Text style={styles.viewOrderButton}>View Details</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
  viewOrderButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyOrderPage;