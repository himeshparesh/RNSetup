import React, {useEffect} from 'react';
import {RootNavigator} from './navigators';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {LogBox, Text, View} from 'react-native';
import {WRootToastApp} from 'react-native-smart-tip';
import {keys} from './res/global';
import {getLocalDataByKey} from './utility/utility';
import i18next from 'i18next';
import {store} from './store/configureStore';
import {Constants} from './utility/Constants';
import NetworkInfo from './components/NetworkInfo';
import { ENV, ENV_BASE_URL } from '../env';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  useEffect(() => {
    // checkAndChangeLanguage();
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  const checkAndChangeLanguage = async () => {
    const currLanguage = await getLocalDataByKey(keys.KEY_CURRENT_LANGUAGE);
    if (currLanguage) {
      i18next.changeLanguage(currLanguage);
    } else {
      i18next.changeLanguage(Constants.englishLanguage);
    }
  };

  console.log("ENVIRONMENT : ", ENV ,  " ENV_BASE_URL : ", ENV_BASE_URL)

  return (
    <Provider store={store}>
      <WRootToastApp>
        <NetworkInfo />
        <RootNavigator />
      </WRootToastApp>
    </Provider>
  );
};

export default App;
