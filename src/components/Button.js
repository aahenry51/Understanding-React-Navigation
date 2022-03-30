import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const Button = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'green',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        fontColor: 'white',
      }}
      onPress={onPress}>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
        }}>
        Button
      </Text>
    </TouchableOpacity>
  );
};
