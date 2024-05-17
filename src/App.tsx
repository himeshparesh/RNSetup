import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {ENV, ENV_BASE_URL} from '../env';
import NetworkInfo from './components/NetworkInfo';
import {RootNavigator} from './navigators';
import {store} from './store/configureStore';
import {ThemeProvider} from './theme/useTheme';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  console.log('ENVIRONMENT : ', ENV, ' ENV_BASE_URL : ', ENV_BASE_URL);

  return (
    <Provider store={store}>
      <NetworkInfo />
      <ThemeProvider>
        <RootNavigator />
        <Toast />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
