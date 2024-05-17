import {NativeStackNavigationHelpers} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Api} from '@root/apiManager';
import {AleartDialog} from '@root/components/AleartDialog';
import CustomButton from '@root/components/CustomButton';
import CustomText from '@root/components/TextButton';
import {Resource} from '@root/res';
import {loginThunk} from '@root/store/ThunkActions';
import {storeToken} from '@root/store/reducers/Login/LoginSlice';
import {useTheme} from '@root/theme/useTheme';
import {default as React} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';

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
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(storeToken('12345'));
    let url = Api.api.login;

    let body = {
      username: 'kminchelle',
      password: '0lelplR',
    };
    let type = Resource.globals.APITypes.post;
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
        title={'toggle'}
        labelStyle={{color: theme.color}}
        onPress={() => {
          toggleTheme(theme.name == 'dark' ? false : true);
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
