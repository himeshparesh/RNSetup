import {R} from '@root/res';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  itemTxt: {
    fontWeight: '500',
    ...R.palette.StyleText(
      R.palette.FontSizes.Small,
      R.fonts['Karla-Regular'],
      R.colors.white,
    ),
    textAlign: 'center',
  },
  renderItem: {
    borderRadius: moderateScale(20),
    marginRight: moderateScale(8),
    marginTop: moderateVerticalScale(10),
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(8),
    paddingHorizontal: moderateScale(20),
    borderWidth: 1,
    borderColor: R.colors.grayD3D4D5,
  },
  txtTitle: {
    marginTop: moderateVerticalScale(15),
    marginLeft: moderateScale(16),
  },
  listContainerStyle: {
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(8),
  },
});
