import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TextInputComponent} from '../components/textInput';
import {Button} from '../components/Button';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [key] = useState('Alphi');

  return (
    <View
      style={{
        padding: 40,
        paddingTop: 100,
        alignItems: 'center',
      }}>
      <TextInputComponent
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <TextInputComponent
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />

      <Text>{username}</Text>

      <Button
        onPress={() => {
          if ({username} === {key}) {
            navigation.navigate('LoginFail');
          }
        }}
      />
    </View>
  );
};
