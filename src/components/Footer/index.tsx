import {colors} from '@root/theme/theme';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
type Props = {
  loading: boolean;
};

export const Footer: React.FC<Props> = props => {
  return props?.loading ? (
    <View style={styles.container}>
      <ActivityIndicator
        animating={props?.loading}
        size="large"
        color={colors.black}
      />
    </View>
  ) : null;
};
