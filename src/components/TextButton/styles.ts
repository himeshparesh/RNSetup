import {R} from '@root/res';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
export default ScaledSheet.create({
  txtTitle: {
    ...R.palette.StyleText(
      R.palette.FontSizes.SubTitle,
      R.fonts['Karla-ExtraBold'],
      R.colors.black,
    ),
  },
});
