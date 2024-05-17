import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  txtTitle: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.SubTitle,
      Resource.fonts['Karla-ExtraBold'],
      colors.black,
    ),
  },
});
