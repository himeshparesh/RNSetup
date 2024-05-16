import {R} from '@root/res';
import {U} from '@root/utility';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: R.colors.red1,
    height: U.utility.getDeviceHeight() * 0.3,
    alignSelf: 'center',
    width: moderateScale(250),
    top: U.utility.getDeviceHeight() * 0.35,
    borderRadius: 20,
  },
  offlineText: {color: '#fff', textAlign: 'center', paddingHorizontal: 40},
  centerContent: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default styles;
