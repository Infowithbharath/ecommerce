// Explore.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const Explore = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch brand banner data from backend
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_API_URL');
      const data = await response.json();
      setBrands(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {brands.map((brand, index) => (
        <Image key={index} source={{ uri: brand.bannerImageUrl }} style={styles.brandBanner} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandBanner: {
    width: '100%',
    height: 200, // Adjust height as needed
    resizeMode: 'cover',
    marginBottom: 10,
  },
});

export default Explore;
