import React, {useReducer} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from './src/screens/SignInScreen';
import {FailSignInScreen} from './src/screens/FailSignInScreen';
import {SuccessSignInScreen} from './src/screens/SuccessSignInScreen';
import {reducer} from './src/components/ReducerHook';

const Stack = createNativeStackNavigator();

const AuthContext = React.createContext();

export default function App() {
  //a hook to set values depending a certain state.
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="LoginFail" component={FailSignInScreen} />
        <Stack.Screen name="LoginSuccess" component={SuccessSignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
