import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Resource} from '@root/res';
import Screens from '@root/screens';
import React from 'react';
import {useTranslation} from 'react-i18next';
import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const DashboardStack = createNativeStackNavigator();

const commonNavOption = {headerShown: true, gestureEnabled: false};

const DashboardNavList = [
  {
    name: Resource.globals.navigationRouteNames.dashboard,
    component: Screens.App.Dashboard,
    options: commonNavOption,
    title: 'header.dashboard',
  },
];

const DashboardStackNav: React.FC = () => {
  const {t} = useTranslation();

  return (
    <DashboardStack.Navigator>
      {DashboardNavList.map(item => (
        <DashboardStack.Screen
          key={item.name}
          options={{...item.options, title: t(item?.title)}}
          name={item.name}
          component={item.component}
        />
      ))}
    </DashboardStack.Navigator>
  );
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={Resource.globals.navigationRouteNames.dashboardTab}
        component={DashboardStackNav}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
