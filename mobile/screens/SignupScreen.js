import React, { useState } from 'react';
import { View, Text, TextInput, Button,  StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Male');
  const [heardAbout, setHeardAbout] = useState([]);
  const [city, setCity] = useState('Mumbai');
  const [state, setState] = useState('Gujarat');

const handleSignup = async () => {
  try {
    const response = await axios.post('http://localhost:3000/auth/signup', {
      name,
      email,
      password,
      phone,
      gender,
      heardAbout,
      city,
      state
    });

    navigation.navigate('Login');
    // Handle successful signup, e.g., navigate to another screen
  } catch (error) {
    console.log(error);
    // Handle signup error, e.g., show error message to the user
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Others" value="Others" />
      </Picker>
      {/* Add checkbox for "heardAbout" */}
      <Picker
        selectedValue={city}
        style={styles.input}
        onValueChange={(itemValue) => setCity(itemValue)}
      >
        <Picker.Item label="Mumbai" value="Mumbai" />
        <Picker.Item label="Pune" value="Pune" />
        <Picker.Item label="Ahmedabad" value="Ahmedabad" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default SignupScreen;
