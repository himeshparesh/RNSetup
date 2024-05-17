import {ToastType} from '@root/types/types';
import {Utils} from '@root/utils';
import {Alert, Linking, Platform} from 'react-native';
import {
  Permission,
  PermissionStatus,
  RESULTS,
  check,
  request,
} from 'react-native-permissions';

export const usePermission = () => {
  const openAppSettings = () => {
    Alert.alert('', 'Please Allow Permission from settings.', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Settings',
        onPress: () => {
          if (Platform.OS === 'android') {
            Linking.openSettings();
          } else Linking.openURL('app-settings:');
        },
      },
    ]);
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
        openAppSettings();
      }
    }
  };

  return {checkAndRequestPermission};
};
