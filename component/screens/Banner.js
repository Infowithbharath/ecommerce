import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Banner = () => {
  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {
    // Fetch banner image from the backend
    const fetchBannerImage = async () => {
      try {
        const response = await fetch('https://example.com/api/banner'); // Replace with your backend API endpoint
        const data = await response.json();
        setBannerImage(data.imageUrl);
      } catch (error) {
        console.error('Error fetching banner image:', error);
      }
    };

    fetchBannerImage(); // Call the fetchBannerImage function when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      {bannerImage ? (
        <Image source={{ uri: bannerImage }} style={styles.image} resizeMode="contain" />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 200, // Set a constant height for the image
    borderRadius: 10,
    overflow: 'hidden',
  },
  placeholder: {
    width: '100%',
    height: 200, // Set the same height as the image
    backgroundColor: '#ccc', // Placeholder background color
    borderRadius: 10,
  },
});

export default Banner;