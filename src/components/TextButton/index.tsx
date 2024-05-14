


import React from 'react';
import { Text,  } from 'react-native';
import styles from './styles';
import { TextStyle } from 'react-native-size-matters';
import { useTheme } from '@root/theme/useTheme';

type prop = {
    text: string;
    style?: TextStyle,
}

const CustomText = ({text,style}: prop) => {
  const {theme} = useTheme();
  return (
    <Text style={[styles.txtTitle,style,{color: theme.primaryText}]}>
      {text}
    </Text>
  );
};

export default CustomText;