import {U} from '@root/utility';
import {default as React, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {NativeStackNavigationHelpers} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useTranslation} from 'react-i18next';
import {A} from '@root/apiManager';
import {R} from '@root/res';
import {loginThunk} from '@root/store/ThunkActions';
import CustomText from '@root/components/TextButton';
import {AleartDialog} from '@root/components/AleartDialog';
import {storeToken} from '@root/store/reducers/Login/LoginSlice';
import {useTheme} from '@root/theme/useTheme';
import CustomButton from '@root/components/CustomButton';

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
  const {theme, toggleTheme} = useTheme();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('current them', theme.color);

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
    // throw new Error('hello');

    dispatch(storeToken('12345'));
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
    <View style={[styles.container, {backgroundColor: theme.layoutBg}]}>
      <TouchableOpacity onPress={handleLogin}>
        <CustomText text="Login few few" />
      </TouchableOpacity>
      <CustomButton 
        title={"toggle"}
        labelStyle={{color: theme.color}}
        onPress={() => {
          toggleTheme(theme.name == 'dark' ? false : true)
        }}
      />
      <AleartDialog
        title={'Demo'}
        message={'| dwd wdw'}
        showBothBtn
        visible={false}
        primaryBtnText={'Allow'}
        secondaryBtnText={'Cancel'}
        onCloseClick={() => {}}
        onPrimaryBtnClick={() => {}}
        onSecondaryBtnClick={() => {}}
      />
    </View>
  );
};

export default Login;
