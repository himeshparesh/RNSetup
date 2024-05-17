import i18n from '@root/language/i18n';
import {Platform} from 'react-native';
import Permissions from 'react-native-permissions';
import {showMessage} from './utility';

export const Helper = {
  checkReadWritePermission: () => {
    if (Platform.OS === 'android') {
      if (Platform.Version >= 33) {
        return;
      }
      Permissions.checkMultiple([
        Permissions.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      ]).then(response => {
        if (
          response['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted'
        ) {
          Permissions.requestMultiple([
            Permissions.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ]).catch(() => showMessage(i18n.t('common.someThingWrong')));
        }
      });
    } else {
      try {
        Permissions.checkMultiple([
          Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
        ]).then(response => {
          if (response['ios.permission.PHOTO_LIBRARY_ADD_ONLY'] !== 'granted') {
            Permissions.requestMultiple([
              Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
            ]).catch(() => showMessage(i18n.t('common.someThingWrong')));
          }
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  },
};
