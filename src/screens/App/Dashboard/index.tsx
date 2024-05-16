import CustomButton from '@root/components/CustomButton';
import {R} from '@root/res';
import {keys} from '@root/res/global';
import {storeToken} from '@root/store/reducers/Login/LoginSlice';
import {Languages} from '@root/utility/Constants';
import {getLocalDataByKey, setLocalDataByKey} from '@root/utility/utility';
import i18next from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import styles from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const handleLogout = () => {
    dispatch(storeToken(''));
  };

  const changeLanguage = async () => {
    const curLang = await getLocalDataByKey(keys.KEY_CURRENT_LANGUAGE);
    if (curLang === Languages.english) {
      setLocalDataByKey(keys.KEY_CURRENT_LANGUAGE, Languages.french).then(
        () => {
          i18next.changeLanguage(Languages.french);
        },
      );
    } else {
      setLocalDataByKey(keys.KEY_CURRENT_LANGUAGE, Languages.english).then(
        () => {
          i18next.changeLanguage(Languages.english);
        },
      );
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
      <Text>{t('testing')}</Text>
      <Text>{t('text.testing')}</Text>
      <Text>{t('common.testing')}</Text>

      <CustomButton
        title={t('buttonTitle.changeLanguage')}
        labelStyle={{color: R.colors.white}}
        onPress={() => changeLanguage()}
        bgColor={R.colors.primaryGreen}
        height={moderateVerticalScale(44)}
        width={'100%'}
      />
    </View>
  );
};

export default Dashboard;
