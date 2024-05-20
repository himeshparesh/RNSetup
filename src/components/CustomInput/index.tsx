import {Resource} from '@root/res';
import {FontSizes} from '@root/res/palette';
import {colors} from '@root/theme/theme';
import {useTheme} from '@root/theme/useTheme';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

interface InputPropsType extends TextInputProps {
  testID?: string;
  style?: ViewStyle;
  error?: string;
  title?: string;
  txtTitleStyle?: TextStyle;
  mainStyle?: ViewStyle;
}

const CustomInput = ({
  mainStyle,
  txtTitleStyle,
  style,
  error,
  title,
  ...rest
}: InputPropsType) => {
  const {theme} = useTheme();

  return (
    <View style={[styles.inputWrp, mainStyle]}>
      <Text style={[styles.txtDefaultStyle, txtTitleStyle]}>{title}</Text>
      <TextInput
        {...rest}
        placeholderTextColor={theme.txtPlaceholder}
        style={[styles.input, {backgroundColor: theme.inputBg}, {...style}]}
      />
      {error ? (
        <Text
          style={[
            styles.error,
            {color: error ? colors.red : colors.transparent},
          ]}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};

export {CustomInput};

const styles = StyleSheet.create({
  inputWrp: {
    width: '100%',
    marginBottom: moderateVerticalScale(-5),
  },
  txtDefaultStyle: {
    color: colors.black,
    fontSize: FontSizes.Small,
    marginVertical: moderateVerticalScale(10),
  },
  input: {
    borderRadius: moderateScale(5),
    minHeight: moderateVerticalScale(50),
    color: colors.black,
    paddingLeft: moderateScale(20),
  },
  error: {
    ...Resource.palette.StyleText(Resource.palette.FontSizes.Small),
    marginVertical: moderateVerticalScale(5),
    height: moderateVerticalScale(15),
  },
});
