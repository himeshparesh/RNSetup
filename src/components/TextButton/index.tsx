


import React from 'react';
import { Text,  } from 'react-native';
import styles from './styles';
import { TextStyle } from 'react-native-size-matters';

type prop = {
    text: string;
    style?: TextStyle,
}

const CustomText = ({text,style}: prop) => {
  return (
    <Text style={[styles.txtTitle,style]}>
      {text}
    </Text>
  );
};

export default CustomText;