import {AleartDialog} from '@root/components/AleartDialog';
import {ToastType} from '@root/types/types';
import {Utils} from '@root/utils';
import {isAndroid} from '@root/utils/Constants';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Linking} from 'react-native';
import {
  Permission,
  PermissionStatus,
  RESULTS,
  check,
  request,
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

  const checkAndRequestPermission = async (permission: Permission) => {
    let status: PermissionStatus = RESULTS.UNAVAILABLE;
    const permissionStatus = await check(permission);
    status = permissionStatus;
    console.log('Permission String: ', permission);
    if (permissionStatus === RESULTS.GRANTED) {
      console.log('GRANTED');
      Utils.Utility.showMessage(ToastType.success, 'GRANTED');
    } else if (
      permissionStatus === RESULTS.DENIED ||
      permissionStatus === RESULTS.BLOCKED ||
      permissionStatus === RESULTS.UNAVAILABLE
    ) {
      console.log('ST :', JSON.stringify(permissionStatus));
      const newPermissionStatus = await request(permission);
      status = newPermissionStatus;
      console.log('NewPermissionStatus : ', newPermissionStatus);
      if (
        newPermissionStatus === RESULTS.DENIED ||
        newPermissionStatus === RESULTS.BLOCKED
      ) {
        setShowAlert(true);
      }
    }
  };

  return {checkAndRequestPermission, AppSettingsAlert};
};
