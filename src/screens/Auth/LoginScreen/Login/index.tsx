import {NativeStackNavigationHelpers} from '@react-navigation/native-stack/lib/typescript/src/types';
import CustomButton from '@root/components/CustomButton';
import Layout from '@root/components/Layout';
import CustomText from '@root/components/TextButton';
import {useTheme} from '@root/theme/useTheme';
import {default as React} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {useLogin} from './useLogin';

type Params = {
  params: {
    isGoBack?: boolean;
  };
};
type Props = {
  navigation: NativeStackNavigationHelpers;
  route: Params;
};

const Login: React.FC<Props> = (props: Props) => {
  const {theme, toggleTheme} = useTheme();
  const {t} = useTranslation();
  const {onLoginClick} = useLogin();

  return (
    <Layout style={[styles.container, {backgroundColor: theme.layoutBg}]}>
      <TouchableOpacity onPress={onLoginClick}>
        <CustomText text="Login few few" />
      </TouchableOpacity>
      <CustomButton
        title={t('buttonTitle.toggle')}
        onPress={() => toggleTheme(theme.name == 'dark' ? false : true)}
      />
    </Layout>
  );
};

export default Login;
