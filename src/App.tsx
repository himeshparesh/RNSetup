import i18next from 'i18next';
import React, {useEffect} from 'react';
import {LogBox, useColorScheme} from 'react-native';
import {WRootToastApp} from 'react-native-smart-tip';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {ENV, ENV_BASE_URL} from '../env';
import NetworkInfo from './components/NetworkInfo';
import {RootNavigator} from './navigators';
import {keys} from './res/global';
import {store} from './store/configureStore';
import {ThemeProvider, useTheme} from './theme/useTheme';
import {Languages} from './utility/Constants';
import {getLocalDataByKey} from './utility/utility';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  const currentTheme = useColorScheme();
  const {toggleTheme} = useTheme();
  useEffect(() => {
    // toggleTheme(currentTheme == 'dark')
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  console.log('ENVIRONMENT : ', ENV, ' ENV_BASE_URL : ', ENV_BASE_URL);

  return (
    <Provider store={store}>
      <WRootToastApp>
        <NetworkInfo />
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </WRootToastApp>
    </Provider>
  );
};

export default App;
