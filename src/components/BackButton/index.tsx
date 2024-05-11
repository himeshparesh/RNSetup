import React from 'react';
import {Back} from '@root/res/svgImages';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';

export interface Props {
  back?: () => void;
}

const BackButton = ({back}: Props) => {
  return (
    <TouchableOpacity style={styles.btnBack} onPress={back}>
      <Back />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btnBack: {
    position: 'absolute',
    top: moderateVerticalScale(60),
    left: 20,
    zIndex: 1,
  },
});
