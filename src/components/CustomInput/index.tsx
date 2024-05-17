import {Resource} from '@root/res';
import {FontSizes} from '@root/res/palette';
import {colors} from '@root/theme/theme';
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
  return (
    <View style={[styles.inputWrp, mainStyle]}>
      <Text style={[styles.txtDefaultStyle, txtTitleStyle]}>{title}</Text>
      <TextInput
        {...rest}
        placeholderTextColor={colors.graySearch}
        style={[
          styles.input,
          {color: colors.black, paddingLeft: 20},
          {...style},
        ]}
      />
      {/* {error ? ( */}
      <Text
        style={[
          styles.error,
          {color: error ? colors.red : colors.transparent},
        ]}>
        {error}
      </Text>
      {/* ) : null} */}
    </View>
  );
};

export {CustomInput};

const styles = StyleSheet.create({
  inputWrp: {
    width: '100%',
    marginBottom: -5,
  },
  txtDefaultStyle: {
    color: colors.black,
    fontSize: FontSizes.Small,
    marginVertical: 10,
  },
  input: {
    borderRadius: 5,
    minHeight: 50,
  },
  error: {
    ...Resource.palette.StyleText(Resource.palette.FontSizes.Small),
    marginVertical: 5,
    height: 15,
  },
});
