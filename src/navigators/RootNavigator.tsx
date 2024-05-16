import {NavigationContainer} from '@react-navigation/native';

import React, {useEffect} from 'react';
import AppNavigator from './AppNavigator';
import {navigationRef} from './RootNavigation';
import AuthNavigator from './AuthNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {R} from '@root/res';
import {useDispatch, useSelector} from 'react-redux';
import {storeToken} from '@root/store/reducers/Login/LoginSlice';
import {RootState} from '@root/store/configureStore';
import i18next from 'i18next';
import {getLocalDataByKey} from '@root/utility/utility';
import {Languages} from '@root/utility/Constants';
import {keys} from '@root/res/global';

export default function RootNavigator() {
  const login = useSelector((state: RootState) => state.rootReducer.login);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAndChangeLanguage();
  }, []);

  const checkAndChangeLanguage = async () => {
    const currLanguage = await getLocalDataByKey(keys.KEY_CURRENT_LANGUAGE);
    console.log('currLanguage', currLanguage);
    // i18next.changeLanguage('fr');
    if (currLanguage) {
      console.log('CHANGE TO CUR');
      i18next.changeLanguage(currLanguage);
    } else {
      i18next.changeLanguage(Languages.english);
    }
  };

  useEffect(() => {
    async function checkIsLogined() {
      try {
        AsyncStorage.getItem(R.globals.keys.KEY_USER_DATA, (error, result) => {
          if (!error && result) {
            var res = JSON.parse(result);
            dispatch(storeToken(res?.data?.api_token));
          } else {
            dispatch(storeToken(''));
          }
        });
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
