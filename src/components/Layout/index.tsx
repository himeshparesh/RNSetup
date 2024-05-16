import {LayoutPropsType} from '@root/types/components';
import React from 'react';
import {View} from 'react-native';
import SafeArea from '../SafeArea';
import styles from './styles';
import { useTheme } from '@root/theme/useTheme';

const Layout = ({children, style}: LayoutPropsType) => {
  const {theme} = useTheme();
  return (
    <SafeArea topColor={theme.color}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeArea>
  );
};

export default Layout;
