import {Platform} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';

export const Constants = {
  whatapp: 'whatapp',
  email: 'email',
  phone: 'phone',
  social: 'social',
  iMessage: 'iMessage',
  activeOpacity: 0.8,
  bottomTabHeight: moderateVerticalScale(70),
};

export const Languages = {
  english: 'en',
  french: 'fr',
};

export const isAndroid = Platform.OS === 'android';

export const PhoneType = [
  {name: 'Home'},
  {name: 'Work'},
  {name: 'Mobile'},
  {name: 'Fax'},
  {name: 'Pager'},
  {name: 'Other'},
];
