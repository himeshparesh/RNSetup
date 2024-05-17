import {useTheme} from '@root/theme/useTheme';
import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import SafeArea from '../SafeArea';
import styles from './styles';

interface LayoutPropsType {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Layout = ({children, style}: LayoutPropsType) => {
  const {theme} = useTheme();
  return (
    <SafeArea topColor={theme.color}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeArea>
  );
};

export default Layout;
