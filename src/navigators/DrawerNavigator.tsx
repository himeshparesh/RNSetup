import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {Resource} from '@root/res';
import Screens from '@root/screens';
import React from 'react';
import {useTranslation} from 'react-i18next';
import DrawerContent from './DrawerContent';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const commonNavOption = {
  headerShown: true,
  gestureEnabled: true,
  swipeEnabled: false,
};

const DrawerNavList = [
  {
    name: Resource.globals.navigationRouteNames.tabNav,
    component: TabNavigator,
    options: commonNavOption,
    title: 'header.bottomTab',
  },
  {
    name: Resource.globals.navigationRouteNames.dashboard,
    component: Screens.App.Dashboard,
    options: commonNavOption,
    title: 'header.dashboard',
  },
  {
    name: Resource.globals.navigationRouteNames.postDetails,
    component: Screens.App.PostDetails,
    options: commonNavOption,
    title: 'header.postDetails',
  },
];

export const DrawerNavigator = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator
      initialRouteName=""
      screenOptions={{
        drawerType: 'front',
      }}
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}>
      {DrawerNavList.map(item => (
        <Drawer.Screen
          key={item.name}
          options={{...item.options, title: t(item?.title)}}
          name={item.name}
          component={item.component}
        />
      ))}
    </Drawer.Navigator>
  );
};
