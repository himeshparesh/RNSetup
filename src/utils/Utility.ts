import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import i18n from '@root/language/i18n';
import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {ToastType} from '@root/types/types';
import {
  Alert,
  Dimensions,
  Linking,
  NativeScrollEvent,
  Platform,
} from 'react-native';
import Toast, {ToastPosition} from 'react-native-toast-message';
import {Constants} from './Constants';

export const getDeviceWidth = () => {
  return Math.round(Dimensions.get('window').width);
};

export const getDeviceHeight = () => {
  return Math.round(Dimensions.get('window').height);
};

export const getOS = () => {
  if (Platform.OS === 'ios') {
    return 'ios';
  }
  return 'android';
};

export const getUrlExtension = url => {
  return url.split(/[#?]/)[0].split('.').pop().trim();
};

export const stringToBool = string => {
  if (string == true) {
    return true;
  } else if (string == false) {
    return false;
  }
  switch ((string ?? '').toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
      return true;
    case 'false':
    case 'no':
    case '0':
    case '':
    case null:
      return false;
    default:
      return Boolean(string);
  }
};

export const zeroPad = (num, places) => String(num).padStart(places, '0');

export const alertOkButton = {
  text: 'Ok',
  onPress: () => console.log('OK Pressed'),
};

export const showMessage = (
  type: ToastType,
  msg1: string,
  msg2?: string,
  position?: ToastPosition,
) => {
  console.log('Message: ', msg1);

  Toast.show({
    type: type,
    text1: msg1,
    text2: msg2,
    position: position || 'bottom',
    text1Style: {color: colors.black, fontSize: 14},
    text2Style: {color: colors.black, fontSize: 12},
    visibilityTime: 2000,
  });
};

export const alertCancelButton = {
  text: 'Cancel',
  onPress: () => console.log('Cancel Pressed'),
};

export const showAlert = (title = i18n.t('appName'), message) => {
  Alert.alert(title, message);
};

export const showAlertOk = (
  title = i18n.t('appName'),
  message,
  buttons = [alertOkButton],
) => {
  Alert.alert(title, message, buttons, {
    cancelable: false,
  });
};

export const showAlertTwoButton = (
  title = i18n.t('appName'),
  message,
  buttons = [alertOkButton, alertCancelButton],
) => {
  Alert.alert(title, message, buttons, {
    cancelable: false,
  });
};

export const getAccessToken = () => {
  return global.AccessToken;
};
export const setAccessToken = value => {
  global.AccessToken = value;
};

export const storeUserData = res => {
  // setAccessToken(res?.data?.api_token);
  // console.log('Saved user data in storeUserData!!', res?.data?.api_token);
  AsyncStorage.setItem(
    Resource.globals.keys.KEY_USER_DATA,
    JSON.stringify(res),
    error => {
      if (!error) {
        console.log('Saved user data in asyncStorage!!');
      } else {
        console.log('Not Saved user data in asyncStorage!!', error);
      }
    },
  );
};

export const clearUserData = async () => {
  setAccessToken(undefined);

  try {
    await AsyncStorage.removeItem(
      Resource.globals.keys.KEY_USER_DATA,
      async () => {
        await clearLocalData();
        console.log('clear data done');
      },
    );
  } catch (e) {
    console.log('error in clear user data', e);
  }
};

export const sendEmail = (newemail: string) => {
  Linking.openURL('mailto:' + newemail);
};

export const CheckInternet = () => {
  NetInfo.fetch().then(state => {
    if (state.isConnected == false) {
      showAlert(undefined, i18n.t('text.pleaseCheckYourInternet'));
      return true;
    }
  });
};
export const capitalizeFirstLetter = (string: string) => {
  return string ? string[0].toUpperCase() + string.slice(1) : '';
};

export const isValidEmail = (email: string) => {
  let regexEmail =
    /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[A-Z|a-z]{2,3}$/;
  if (regexEmail.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const isValidPhoneNumber = (phoneNumber: string) => {
  let regexEmail = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (regexEmail.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
};

export async function setLocalDataByKey(key: string, value: any) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function getLocalDataByKey(key: string) {
  return JSON.parse(await AsyncStorage.getItem(key));
}

export async function clearLocalData() {
  const dataKeys = await AsyncStorage.getAllKeys();
  const valuesNotToRemove = []; //add key name from async which you would like to clear from async store
  const filteredArray = dataKeys.filter(
    value => !valuesNotToRemove.includes(value),
  );
  await AsyncStorage.multiRemove(filteredArray);
}

export const getFirstLetterOfName = (
  firstName: string = '',
  lastName: string = '',
) => {
  if (firstName && lastName)
    return `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
  if (firstName || firstName !== '')
    return `${firstName.charAt(0).toUpperCase()}${firstName
      .charAt(1)
      .toUpperCase()}`;
  if (lastName || lastName !== '')
    return `${lastName.charAt(0).toUpperCase()}${lastName
      .charAt(1)
      .toUpperCase()}`;
  return '';
};

export const getFullAddress = (
  street: string = '',
  city: string = '',
  state: string = '',
  postCode: string = '',
) => `${street},\n${city}, ${state}, ${postCode}`;

export const isValidPassword = password => {
  var regularExpression =
    /^(?=.*[A-Z][a-z]{1,})(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (regularExpression.test(password)) {
    return true;
  } else {
    return false;
  }
};

export const IsScrollViewCloseToBottom = (
  paddingToBottom: number,
  {layoutMeasurement, contentOffset, contentSize}: NativeScrollEvent,
) => {
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export const getExtension = (url: string) => {
  const splitArray = url.split('.');
  let extension = splitArray[splitArray.length - 1];

  if (extension.includes('?')) {
    const spllit = extension.split('?');
    if (spllit?.length >= 1) extension = spllit[0];
  }

  return extension;
};

export const openPlaystoreForInstagram = () =>
  Linking.openURL(
    Platform.OS === 'android'
      ? Constants.openPlaystoreForInstagramLinkAnroid
      : Constants.openPlaystoreForInstagramLinkIos,
  );
