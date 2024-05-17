import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  itemTxt: {
    fontWeight: '500',
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Small,
      Resource.fonts['Karla-Regular'],
      colors.white,
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
    borderColor: colors.grayD3D4D5,
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
