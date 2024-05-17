import {colors} from '@root/theme/theme';
import React from 'react';
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
    backgroundColor: colors.lightGray20,
    marginVertical: 5,
  },
});
