import colors from '@root/res/colors';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {R} from '@root/res';
import {FontSizes} from '@root/res/palette';
import fonts from '@root/res/fonts';

export default ScaledSheet.create({
  textInputStyle: {
    textAlign: 'auto',
    backgroundColor: colors.white,
    marginTop: moderateScale(12),
    width: '100%',
  },
  outlinedStyle: {borderWidth: moderateScale(0.5)},
  btnPassword: {
    position: 'absolute',
    right: 38,
    top: 195,
    zIndex: 10,
  },
  passwordIconStyle: {
    right: moderateScale(20),
    top: moderateScale(32),
    position: 'absolute',
  },
  dropDownIconStyle: {
    right: moderateScale(15),
    top: moderateScale(35),
    position: 'absolute',
    height: moderateScale(10),
    width: moderateScale(18),
  },
  optionalText: {
    position: 'absolute',
    top: moderateVerticalScale(12),
    right: moderateScale(10),
    backgroundColor: R.colors.white,
    paddingHorizontal: moderateScale(6),
    ...R.palette.StyleText(
      FontSizes.SubTitle,
      fonts['Karla-SemiBold'],
      R.colors.gray,
    ),
  },
});
