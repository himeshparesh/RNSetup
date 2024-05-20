import {Resource} from '@root/res';
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
    height: moderateVerticalScale(120),
    marginStart: moderateScale(16),
    backgroundColor: 'white',
    marginVertical: moderateVerticalScale(8),
    borderRadius: moderateScale(10),
  },
  imgStyle: {
    width: Utils.Utility.getDeviceWidth() * 0.5,
    height: moderateVerticalScale(120),
    borderRadius: moderateScale(10),
  },
  contentMarginSpacing: {
    marginHorizontal: Resource.palette.Spacing.HR16,
  },
});
