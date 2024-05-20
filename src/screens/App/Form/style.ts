import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {ScaledSheet, moderateVerticalScale} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: Resource.palette.Spacing.HR16,
  },
  input: {
    marginTop: moderateVerticalScale(8),
  },
  inputEmail: {marginBottom: moderateVerticalScale(18)},
});
