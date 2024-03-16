import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const CustomerCarePage = () => {
  const handleEmail = () => {
    Linking.openURL('mailto: jtdealcustomercare@gmail.com');
  };

  const handlePhoneCall = () => {
    Linking.openURL('tel: (+91) 86750 66666');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Customer Care</Text>

      <View style={styles.card}>
        <Text style={styles.sectionHeading}>Contact Information</Text>
        <TouchableOpacity onPress={handleEmail}>
          <Text style={styles.contactOption}>mailto: jtdealcustomercare@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePhoneCall}>
          <Text style={styles.contactOption}>phone: ********** </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeading}>Frequently Asked Questions</Text>
        {/* Include your FAQ content here */}
      </View>

      {/* Additional sections such as Help Resources, Customer Feedback, Support Hours, etc. */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  
  sectionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactOption: {
    fontSize: 16,
    marginBottom: 5,
    color: 'purple',
  },
});

export default CustomerCarePage;

