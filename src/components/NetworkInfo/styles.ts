import {colors} from '@root/theme/theme';
import {Utils} from '@root/utils';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  offlineContainer: {
    backgroundColor: colors.red1,
    height: Utils.Utility.getDeviceHeight() * 0.3,
    alignSelf: 'center',
    width: moderateScale(250),
    top: Utils.Utility.getDeviceHeight() * 0.35,
    borderRadius: moderateScale(20),
  },
  offlineText: {
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: moderateScale(40),
  },
  centerContent: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default styles;
