import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export default ScaledSheet.create({
  rawStyle: {
    flexDirection: 'row',
    marginTop: moderateScale(21),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateVerticalScale(10),
  },
  priceTxt: {
    fontWeight: '700',
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Medium,
      Resource.fonts['Karla-Bold'],
      colors.gray1,
    ),
  },
  thumbView: {
    width: moderateVerticalScale(20),
    height: moderateVerticalScale(20),
    borderRadius: moderateVerticalScale(20),
    borderWidth: moderateScale(4),
    borderColor: colors.primaryGreen,
    backgroundColor: '#ffffff',
  },
  railView: {
    flex: 1,
    height: moderateVerticalScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: colors.lightGrayE5E5,
  },
  railSelected: {
    height: moderateVerticalScale(4),
    backgroundColor: colors.primaryGreen,
    borderRadius: moderateScale(2),
  },
});
