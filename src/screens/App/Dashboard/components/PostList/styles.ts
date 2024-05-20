import {Resource} from '@root/res';
import {Utils} from '@root/utils';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    width: Utils.Utility.getDeviceWidth() * 0.5,
    height: moderateVerticalScale(120),
    backgroundColor: 'white',
    marginStart: moderateScale(16),
    borderRadius: moderateScale(10),
    padding: moderateScale(8),
  },
  txtTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '800',
    marginBottom: 4,
  },
  txtTitleData: {
    fontSize: 16,
    fontWeight: '400',
  },
  contentMarginSpacing: {
    marginHorizontal: Resource.palette.Spacing.HR16,
  },
});
