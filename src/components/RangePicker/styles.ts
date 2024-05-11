import {R} from '@root/res';
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
    ...R.palette.StyleText(
      R.palette.FontSizes.Medium,
      R.fonts['Karla-Bold'],
      R.colors.gray1,
    ),
  },
  thumbView: {
    width: moderateVerticalScale(20),
    height: moderateVerticalScale(20),
    borderRadius: moderateVerticalScale(20),
    borderWidth: moderateScale(4),
    borderColor: R.colors.primaryGreen,
    backgroundColor: '#ffffff',
  },
  railView: {
    flex: 1,
    height: moderateVerticalScale(4),
    borderRadius: moderateScale(4),
    backgroundColor: R.colors.lightGrayE5E5,
  },
  railSelected: {
    height: moderateVerticalScale(4),
    backgroundColor: R.colors.primaryGreen,
    borderRadius: moderateScale(2),
  },
});
