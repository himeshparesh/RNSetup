import CustomButton from '@root/components/CustomButton';
import {usePermission} from '@root/hooks/usePermission';
import {keys} from '@root/res/global';
import {storeToken} from '@root/store/reducers/Login/LoginSlice';
import {colors} from '@root/theme/theme';
import {Utils} from '@root/utils';
import {Languages} from '@root/utils/Constants';
import i18next from 'i18next';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {PERMISSIONS} from 'react-native-permissions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {checkAndRequestPermission} = usePermission();

  const handleLogout = () => {
    dispatch(storeToken(''));
  };

  const changeLanguage = async () => {
    const curLang = await Utils.Utility.getLocalDataByKey(
      keys.KEY_CURRENT_LANGUAGE,
    );
    if (curLang === Languages.english) {
      Utils.Utility.setLocalDataByKey(
        keys.KEY_CURRENT_LANGUAGE,
        Languages.french,
      ).then(() => {
        i18next.changeLanguage(Languages.french);
      });
    } else {
      Utils.Utility.setLocalDataByKey(
        keys.KEY_CURRENT_LANGUAGE,
        Languages.english,
      ).then(() => {
        i18next.changeLanguage(Languages.english);
      });
    }
  };

  const onPermissionPress = () => {
    const permission = Platform.select({
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    });
    checkAndRequestPermission(permission);
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
        onPress={() => changeLanguage()}
        bgColor={colors.primaryGreen}
        height={moderateVerticalScale(44)}
        width={'100%'}
      />

      <CustomButton
        title={t('buttonTitle.permission')}
        onPress={() => onPermissionPress()}
        bgColor={colors.primaryGreen}
        height={moderateVerticalScale(44)}
        width={'100%'}
      />
    </View>
  );
};

export default Dashboard;
