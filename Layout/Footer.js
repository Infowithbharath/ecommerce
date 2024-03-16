import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleExplorePress = () => {
    navigation.navigate('Explore');
  };

  const handleUserAccountPress = () => {
    navigation.navigate('UserAccount');
  };

  const handleMyOrderPage = () => {
    navigation.navigate('MyOrderPage');
  };

  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem} onPress={handleHomePress}>
        <FontAwesome5 name="home" size={28} color="darkblue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={handleExplorePress}>
        <FontAwesome5 name="compass" size={28} color="darkblue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={handleUserAccountPress}>
        <FontAwesome5 name="user" size={28} color="darkblue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={handleMyOrderPage}>
        <FontAwesome5 name="dolly" size={28} color="darkblue" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerItem} onPress={handleMenuPress}>
        <FontAwesome5 name="bars" size={28} color="darkblue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Footer;
