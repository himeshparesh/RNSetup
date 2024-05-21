import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Resource} from '@root/res';
import Screens from '@root/screens';
import {RootState} from '@root/store/configureStore';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {DrawerNavigator} from './DrawerNavigator';
import {navigateReplace} from './RootNavigation';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const commonNavOption = {
  headerShown: false,
  gestureEnabled: false,
};

export const StackNavList = [
  {
    name: Resource.globals.navigationRouteNames.splash,
    component: Screens.App.Splash,
    options: commonNavOption,
  },
  {
    name: Resource.globals.navigationRouteNames.login,
    component: Screens.Auth.Login,
    options: commonNavOption,
    title: 'header.login',
  },
  {
    name: Resource.globals.navigationRouteNames.tabNav,
    component: TabNavigator,
    options: commonNavOption,
    title: 'header.bottomTab',
  },
  {
    name: Resource.globals.navigationRouteNames.drawer,
    component: DrawerNavigator,
    options: commonNavOption,
    title: 'header.drawer',
  },
  {
    name: Resource.globals.navigationRouteNames.form,
    component: Screens.App.Form,
    options: {...commonNavOption, headerShown: true},
    title: 'header.form',
  },
  {
    name: Resource.globals.navigationRouteNames.sqliteExample,
    component: Screens.App.SQLiteExample,
    options: {...commonNavOption, headerShown: true},
    title: 'header.sqliteExample',
  },
];

function AppNavigator() {
  const {t} = useTranslation();
  const login = useSelector((state: RootState) => state.login);

  useEffect(() => {
    checkIsTokenAvailable();
  }, [login?.token]);

  const checkIsTokenAvailable = () => {
    if (login && login.token != '') {
      navigateReplace(Resource.globals.navigationRouteNames.tabNav);
    } else {
      navigateReplace(Resource.globals.navigationRouteNames.login);
    }
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {StackNavList.map(item => (
        <Stack.Screen
          key={item.name}
          options={{...item.options, title: t(item?.title)}}
          name={item.name}
          component={item.component}
        />
      ))}
    </Stack.Navigator>
  );
}

export default AppNavigator;
