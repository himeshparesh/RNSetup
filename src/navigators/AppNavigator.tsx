import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRouteNames} from '@root/res/global';
import {RootState} from '@root/store/configureStore';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import TabNavigator from './TabNavigator';

const commonNavOption = {
  headerShown: false,
  gestureEnabled: false,
};

// export const StackNavList = [
//   {
//     name: navigationRouteNames.dashboard,
//     component: "ProfileStacks.EditProfileScreen",
//     options: commonNavOption,
//   },
// ];

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const [initialRouteName, setInitialRouteName] = useState<string>();

  const login = useSelector((state: RootState) => state.login);

  const checkIsTokenAvailable = () => {
    if (login && login.token != '') {
      setInitialRouteName(navigationRouteNames.tabNav);
      return;
    }
    setInitialRouteName(navigationRouteNames.tabNav);
  };

  const showPermissionDialoge = () => {
    // Helper.checkReadWritePermission();
  };

  useEffect(() => {
    showPermissionDialoge();
  }, []);

  useEffect(() => {
    checkIsTokenAvailable();
  }, [login?.token]);

  if (!initialRouteName) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={navigationRouteNames.tabNav}
        component={TabNavigator}
      />
      {/* {StackNavList.map(item => (
        <Stack.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))} */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
