import {ApolloProvider} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {useApolloClient} from '@root/graphQL/useApolloClient';
import {Resource} from '@root/res';
import {keys} from '@root/res/global';
import {RootState} from '@root/store/configureStore';
import {storeToken} from '@root/store/reducers/LoginSlice';
import {colors} from '@root/theme/theme';
import {Utils} from '@root/utils';
import {Languages} from '@root/utils/Constants';
import i18next from 'i18next';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {navigationRef} from './RootNavigation';

export default function RootNavigator() {
  const login = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const {client} = useApolloClient();

  useEffect(() => {
    checkAndChangeLanguage();
  }, []);

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

  return client ? (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </ApolloProvider>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.black} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
