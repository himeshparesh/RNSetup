import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {ScaledSheet, moderateVerticalScale} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    marginVertical: moderateVerticalScale(8),
  },
  txtTitle: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Large,
      Resource.fonts['Karla-ExtraBold'],
      colors.black,
    ),
  },
});
