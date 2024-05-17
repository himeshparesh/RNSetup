import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
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
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Medium,
      Resource.fonts['Karla-Bold'],
      colors.gray1,
    ),
  },
  txtLabel: {
    marginStart: moderateScale(8),
    backgroundColor: colors.greenLight,
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: moderateScale(6),
    paddingVertical: moderateScale(2),
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Medium,
      Resource.fonts['Karla-Medium'],
      colors.primaryGreen,
    ),
  },
});
