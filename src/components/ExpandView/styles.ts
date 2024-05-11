import {R} from '@root/res';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    backgroundColor: R.colors.white,
    borderRadius: moderateScale(10),
    marginHorizontal: moderateScale(16),
  },
  clickContainer: {
    paddingVertical: moderateVerticalScale(16),
    paddingHorizontal: moderateScale(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtTitle: {
    ...R.palette.StyleText(
      R.palette.FontSizes.Medium,
      R.fonts['Karla-Bold'],
      R.colors.gray1,
    ),
  },
  txtLabel: {
    marginStart: moderateScale(8),
    backgroundColor: R.colors.greenLight,
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateScale(2),
    ...R.palette.StyleText(
      R.palette.FontSizes.Medium,
      R.fonts['Karla-Medium'],
      R.colors.primaryGreen,
    ),
  },
});
