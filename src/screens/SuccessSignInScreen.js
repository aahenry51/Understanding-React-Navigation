import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TextInputComponent} from '../components/textInput';
import {Button} from '../components/Button';

export const SuccessSignInScreen = () => {
  return (
    <View
      style={{
        padding: 40,
        paddingTop: 100,
        alignItems: 'center',
      }}>
      <Text>Successfully login</Text>
    </View>
  );
};
