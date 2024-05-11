import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {R} from '@root/res';
import S from '@root/screens';
import React from 'react';

function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator initialRouteName={R.globals.navigationRouteNames.login}>
      <Stack.Screen
        name={R.globals.navigationRouteNames.login}
        component={S.Auth.LoginScreens.Login}
        options={{gestureEnabled: false}}
      />
      </Stack.Navigator>
  );
}

export default AuthNavigator;
