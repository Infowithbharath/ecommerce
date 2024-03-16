import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome for the user icon
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons for the edit icon
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const UserAccount = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleToggleMode = () => {
    // Toggle between 'sign-in' and 'sign-up' modes
  };

  const handleLogin = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  const handleLogout = () => {
    // Handle logout action
    console.log('Logout button pressed');
  };

  const handleTermsAndConditions = () => {
    navigation.navigate('TermsAndConditions'); // Navigate to the TermsAndConditions screen
  };

  const handleCustomeCarePage = () => {
    navigation.navigate('CustomerCarePage');
  }

  const handleSaleOnJTDeal = () => {
    // Open Sale on JTDeal page in a new window
    Linking.openURL('https://your-jtdeal-sale-page-url.com');
  }

  const handleMyOrderPage = () => {
    navigation.navigate('MyOrderPage'); // Navigate to the MyOrderPage screen
  }

  return (
    <View style={styles.container}>
      {/* Profile information section */}
      <View style={styles.profileInfo}>
        <View style={styles.profileHeader}>
          <FontAwesome name="user" size={60} color="black" style={styles.profileIcon} />
          <TouchableOpacity style={styles.editIcon} onPress={() => console.log('Edit profile')}>
            <MaterialIcons name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileTitle}>Profile Information</Text>
        <Text>Guest</Text>
        {/* Add more profile information here */}
      </View>

      {/* Conditional rendering based on login status */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Other options */}
      <TouchableOpacity style={styles.option} onPress={handleSaleOnJTDeal}>
        <Text style={styles.optionText}>Sale on JTDeal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleMyOrderPage}>
        <Text style={styles.optionText}>My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleCustomeCarePage}>
        <Text style={styles.optionText}>Customer Care</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleTermsAndConditions}>
        <Text style={styles.optionText}>Terms and Conditions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '95%',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 20,
  },
  editIcon: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 15,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 16,
    color: 'white',
  },
  option: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'left',
  },
  optionText: {
    fontSize: 18,
  },
});

export default UserAccount;