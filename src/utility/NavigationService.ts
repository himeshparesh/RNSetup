import {StackActions} from '@react-navigation/native';

function navigate(navigation, routeName, params, action) {
  navigation.navigate(routeName, params);
}

function goBack(navigation) {
  navigation.goBack();
}

function replace(navigation, routeName, params) {
  navigation.dispatch(StackActions.replace(routeName, params));
}

// add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  replace,
};
