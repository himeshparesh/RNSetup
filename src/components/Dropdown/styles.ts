import {R} from '@root/res';
import colors from '@root/res/colors';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
export default ScaledSheet.create({
  renderItemView: {
    marginHorizontal: moderateScale(8),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(12),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grayD3D4D5,
  },
  txtTitle: {
    marginBottom: moderateScale(20),
    marginLeft: moderateScale(16),
    ...R.palette.StyleText(
      R.palette.FontSizes.Title,
      R.fonts['Karla-ExtraBold'],
      R.colors.black,
    ),
  },
});
