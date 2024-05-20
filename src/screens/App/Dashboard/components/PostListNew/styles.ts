import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {Utils} from '@root/utils';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  rootView: {
    marginTop: moderateVerticalScale(8),
  },
  container: {
    width: Utils.Utility.getDeviceWidth() * 0.5,
    height: moderateVerticalScale(140),
    marginStart: moderateScale(16),
    backgroundColor: colors.white,
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(8),
    overflow: 'hidden',
  },
  imgPost: {
    width: Utils.Utility.getDeviceWidth() * 0.5,
    height: moderateVerticalScale(100),
  },
  txtText: {
    marginTop: moderateVerticalScale(2),
    marginHorizontal: moderateScale(4),
    fontSize: 13,
    color: colors.black,
  },
  contentMarginSpacing: {
    marginHorizontal: Resource.palette.Spacing.HR16,
  },
});
