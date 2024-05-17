import {colors} from '@root/theme/theme';
import {Utility} from '@root/utility';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: colors.red1,
    height: Utility.utility.getDeviceHeight() * 0.3,
    alignSelf: 'center',
    width: moderateScale(250),
    top: Utility.utility.getDeviceHeight() * 0.35,
    borderRadius: 20,
  },
  offlineText: {color: '#fff', textAlign: 'center', paddingHorizontal: 40},
  centerContent: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default styles;
