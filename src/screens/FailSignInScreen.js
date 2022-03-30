import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TextInputComponent} from '../components/textInput';
import {Button} from '../components/Button';
export const FailSignInScreen = () => {
  return (
    <View
      style={{
        padding: 40,
        paddingTop: 100,
        alignItems: 'center',
      }}>
      <Text>Failure to Login</Text>
    </View>
  );
};
