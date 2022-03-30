import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './TextInput_styles';

export const TextInputComponent = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        placeholder={placeholder}
        value={value}
      />
    </View>
  );
};
