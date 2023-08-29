import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Navbar = ({ loggedIn, onLogout, navigation }) => {
  if (loggedIn) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.avatarContainer} onPress={onLogout}>
          <Image
            source={require('../images/peakpx.jpg')} // Add your avatar image source here
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.navButtonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.navButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 15,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  navButton: {
    marginHorizontal: 10,
  },
  navButtonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Navbar;
