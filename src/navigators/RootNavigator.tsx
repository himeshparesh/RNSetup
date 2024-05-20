import {NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Resource} from '@root/res';
import {keys} from '@root/res/global';
import {RootState} from '@root/store/configureStore';
import {storeToken} from '@root/store/reducers/LoginSlice';
import {Utils} from '@root/utils';
import {Languages} from '@root/utils/Constants';
import i18next from 'i18next';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {navigationRef} from './RootNavigation';

export default function RootNavigator() {
  const login = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAndChangeLanguage();
  }, []);

  const checkAndChangeLanguage = async () => {
    const currLanguage = await Utils.Utility.getLocalDataByKey(
      keys.KEY_CURRENT_LANGUAGE,
    );
    if (currLanguage) {
      i18next.changeLanguage(currLanguage);
    } else {
      i18next.changeLanguage(Languages.english);
    }
  };

  useEffect(() => {
    async function checkIsLogined() {
      try {
        AsyncStorage.getItem(
          Resource.globals.keys.KEY_USER_DATA,
          (error, result) => {
            if (!error && result) {
              var res = JSON.parse(result);
              dispatch(storeToken(res?.data?.api_token));
            } else {
              dispatch(storeToken(''));
            }
          },
        );
      } catch (e) {
        console.log('Error in app navigation', e);
      }
    }
    checkIsLogined();
  }, [login.token]);

  return (
    <NavigationContainer ref={navigationRef}>
      <>{login.token == '' ? <AuthNavigator /> : <AppNavigator />}</>
    </NavigationContainer>
  );
}
