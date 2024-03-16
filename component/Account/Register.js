import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Register = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [fullName, setFullName] = useState('');
  const [userName, setuserName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [formError, setFormError] = useState({
    fullName: false,
    userName: false,
    dob: false,
    phoneNumber: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleRegister = () => {
    const errors = {
      fullName: fullName === '',
      userName: userName === '',
      dob: dob === '',
      phoneNumber: phoneNumber === '',
      email: email === '',
      password: password === '',
      confirmPassword: confirmPassword === '',
    };

    setFormError(errors);

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    console.log('Register pressed');
    setPasswordMismatch(false);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    // Reset formError when component mounts
    setFormError({
      fullName: false,
      userName: false,
      dob: false,
      phoneNumber: false,
      email: false,
      password: false,
      confirmPassword: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.card}>
        <View style={styles.inputContainer}>
          <FontAwesome name="id-badge" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          {formError.fullName && <Text style={styles.errorText}>!</Text>}
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="User Name"
            value={userName}
            onChangeText={setuserName}
          />
          {formError.userName && <Text style={styles.errorText}>!</Text>}
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="calendar" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dob}
            onChangeText={setDob}
          />
          {formError.dob && <Text style={styles.errorText}>!</Text>}
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          {formError.phoneNumber && <Text style={styles.errorText}>!</Text>}
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="envelope" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          {formError.email && <Text style={styles.errorText}>!</Text>}
        </View>
        {/* Password Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          {formError.password && <Text style={styles.errorText}>!</Text>}
          <TouchableOpacity onPress={toggleShowPassword}>
            <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="black" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword} 
          />
          {formError.confirmPassword && <Text style={styles.errorText}>!</Text>}
          <TouchableOpacity onPress={toggleShowConfirmPassword}>
            <FontAwesome name={showConfirmPassword ? 'eye' : 'eye-slash'} size={24} color="black" />
          </TouchableOpacity>
        </View>
        {/* Display error message if passwords don't match */}
        {passwordMismatch && (
          <Text style={styles.errorText}>Passwords do not match!</Text>
        )}
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.loginLink}>Already have an account? Login Here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  inputIcon: {
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLink: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Register;
