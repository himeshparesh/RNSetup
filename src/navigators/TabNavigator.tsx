import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigationHelpers} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Resource} from '@root/res';
import Screens from '@root/screens';
import React from 'react';
import TabBar from './TabBarr';

const Tab = createBottomTabNavigator();

const commonNavOption = {headerShown: false, gestureEnabled: false};

const DashboardStack = createNativeStackNavigator();

function DashboardStackNav() {
  const dashboardNavList = [
    {
      name: Resource.globals.navigationRouteNames.dashboard,
      component: Screens.App.Dashboard,
      options: commonNavOption,
    },
    // ...StackNavList,
  ];
  return (
    <DashboardStack.Navigator>
      {dashboardNavList.map(item => (
        <DashboardStack.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </DashboardStack.Navigator>
  );
}

type Props = {
  navigation: NativeStackNavigationHelpers;
};

const TabNavigator = (props: Props) => {
  // const dashboard = useSelector(
  //   (state: RootState) => state.dashboard,
  // );

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
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
