import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
    width: '100%',
  },
  contentSpacing: {
    paddingHorizontal: Resource.palette.Spacing.HR16,
  },
  contentMarginSpacing: {
    marginHorizontal: Resource.palette.Spacing.HR16,
  },
});

export default styles;
