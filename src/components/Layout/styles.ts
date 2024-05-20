import {colors} from '@root/theme/theme';
import {Constants, isAndroid} from '@root/utils/Constants';
import {StyleSheet} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBg,
    marginBottom: isAndroid
      ? Constants.bottomTabHeight
      : moderateVerticalScale(45),
  },
});

export default styles;
