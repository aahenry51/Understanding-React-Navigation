import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export const LoadingScreen = () => {
  return (
    <View
      style={{
        padding: 40,
        paddingTop: 100,
        alignItems: 'center',
      }}>
      <Text>Loading</Text>
    </View>
  );
};
