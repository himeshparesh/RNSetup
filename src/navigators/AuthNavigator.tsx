import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Resource} from '@root/res';
import Screens from '@root/screens';
import React from 'react';

function AuthNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={Resource.globals.navigationRouteNames.login}>
      <Stack.Screen
        name={Resource.globals.navigationRouteNames.login}
        component={Screens.Auth.LoginScreens.Login}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
