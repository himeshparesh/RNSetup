import {useNavigation} from '@react-navigation/native';
import C from '@root/components';
import {U} from '@root/utility';
import {default as React, useState} from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {NativeStackNavigationHelpers} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useTranslation} from 'react-i18next';
import {A} from '@root/apiManager';
import {R} from '@root/res';
import {loginThunk} from '@root/store/ThunkActions';
import CustomText from '@root/components/TextButton';
import { AleartDialog } from '@root/components/AleartDialog';

type Params = {
  params: {
    isGoBack?: boolean;
  };
};
type Props = {
  navigation: NativeStackNavigationHelpers;
  route: Params;
};

const Login = (props: Props) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    if (email == '') {
      U.utility.showMessage(t('validationErrors.enterEmail'));
      return false;
    } else if (!U.utility.isValidEmail(email)) {
      U.utility.showMessage(t('validationErrors.enterValidEmail'));
      return false;
    } else if (password == '') {
      U.utility.showMessage(t('validationErrors.enterPassword'));
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    throw new Error('hello');

    // dispatch(storeToken("12345"))
    let url = A.api.login();

    let body = {
      username: 'kminchelle',
      password: '0lelplR',
    };
    let type = R.globals.APITypes.post;
    const data = {url, body, useJSON: true, isToken: false, type};
    dispatch(loginThunk(data));
  };

  const errorHandler = (error: Error, stackTrace: string) => {
    console.log('|errrrrrrrr', error, stackTrace);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogin}>
        <CustomText text="Login few few" />
        <AleartDialog
          title={"Demo"}
          message={"| dwd wdw"}
          showBothBtn
          visible={false}
          primaryBtnText={"Allow"}
          secondaryBtnText={"Cancel"}
          onCloseClick={() => {}}
          onPrimaryBtnClick={() => {}}
          onSecondaryBtnClick={() => {}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;
