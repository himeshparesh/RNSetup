import {AleartDialog} from '@root/components/AleartDialog';
import {ToastType} from '@root/types/types';
import {Utils} from '@root/utils';
import {isAndroid} from '@root/utils/Constants';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Linking} from 'react-native';
import {
  Permission,
  RESULTS,
  check,
  checkMultiple,
  request,
  requestMultiple,
} from 'react-native-permissions';

export const usePermission = () => {
  const {t} = useTranslation();
  const [title, setTitle] = useState<string>('Permission');
  const [message, setMessage] = useState<string>(
    t('alerts.pleaseAllowPermission'),
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const onPrimaryBtnClick = () => {
    if (isAndroid) {
      Linking.openSettings();
    } else Linking.openURL('app-settings:');
    setShowAlert(false);
  };

  const AppSettingsAlert = () => {
    return (
      <AleartDialog
        title={title}
        message={message}
        visible={showAlert}
        showBothBtn
        primaryBtnText={t('buttonTitle.settings')}
        secondaryBtnText={t('buttonTitle.cancel')}
        onPrimaryBtnClick={onPrimaryBtnClick}
        onCloseClick={() => setShowAlert(false)}
      />
    );
  };

  const checkAndRequestPermission = async (
    permission: Permission,
    callback: (isGranted: boolean) => void,
  ) => {
    const permissionStatus = await check(permission);
    if (permissionStatus === RESULTS.GRANTED) {
      Utils.Utility.showMessage(ToastType.success, 'GRANTED');
      callback(true);
    } else if (
      permissionStatus === RESULTS.DENIED ||
      permissionStatus === RESULTS.BLOCKED ||
      permissionStatus === RESULTS.UNAVAILABLE
    ) {
      const requestPermissionStatus = await request(permission);
      if (requestPermissionStatus === RESULTS.GRANTED) {
        callback(true);
      } else {
        setShowAlert(true);
        callback(false);
      }
    }
  };

  const checkAndRequestMulitiplePermission = async (
    permission: Permission[],
    callback: (isGranted: boolean) => void,
  ) => {
    const permissionStatus = await checkMultiple(permission);
    const deniedPermission: Permission[] = [];
    permission.forEach(item => {
      if (permissionStatus[item] != RESULTS.GRANTED) {
        deniedPermission.push(item);
      }
    });
    if (deniedPermission.length === 0) {
      callback(true);
    } else {
      const requestPermissionStatus = await requestMultiple(deniedPermission);
      const newDeniedPermission = [];
      deniedPermission.forEach(item => {
        if (requestPermissionStatus[item] != RESULTS.GRANTED)
          newDeniedPermission.push(item);
      });
      if (newDeniedPermission?.length == 0) {
        callback(true);
      } else {
        setShowAlert(true);
        callback(false);
      }
    }
  };

  return {
    checkAndRequestPermission,
    AppSettingsAlert,
    checkAndRequestMulitiplePermission,
  };
};
