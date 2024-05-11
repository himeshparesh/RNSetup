import React from 'react';
import {R} from '@root/res';
import {StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  customStyles?: ViewStyle;
};

export const Divider = (props: Props) => (
  <View style={[styles.dividerStyle, props.customStyles]}></View>
);

const styles = StyleSheet.create({
  dividerStyle: {
    height: 1,
    width: '100%',
    backgroundColor: R.colors.lightGray20,
    marginVertical: 5,
  },
});
