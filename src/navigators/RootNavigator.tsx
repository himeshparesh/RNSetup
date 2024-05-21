import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {useApolloClient} from '@root/graphQL/useApolloClient';
import {keys} from '@root/res/global';
import {colors} from '@root/theme/theme';
import {Utils} from '@root/utils';
import {Languages} from '@root/utils/Constants';
import i18next from 'i18next';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import AppNavigator from './AppNavigator';
import {navigationRef} from './RootNavigation';

export default function RootNavigator() {
  const {client} = useApolloClient();

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
