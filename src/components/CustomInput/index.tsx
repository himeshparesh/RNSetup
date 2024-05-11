import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {InputPropsType} from '@root/types/components';
import {R} from '@root/res';
import {FontSizes} from '@root/res/palette';

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
        placeholderTextColor={R.colors.graySearch}
        style={[
          styles.input,
          {color: R.colors.black, paddingLeft: 20},
          {...style},
        ]}
      />
      {/* {error ? ( */}
      <Text
        style={[
          styles.error,
          {color: error ? R.colors.red : R.colors.transparent},
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
    color: R.colors.black,
    fontSize: FontSizes.Small,
    marginVertical: 10,
  },
  input: {
    borderRadius: 5,
    minHeight: 50,
  },
  error: {
    ...R.palette.StyleText(R.palette.FontSizes.Small),
    marginVertical: 5,
    height: 15,
  },
});
