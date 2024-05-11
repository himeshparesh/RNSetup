import {R} from '@root/res';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
type FooterProps = {
  loading: boolean;
};

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  if (props?.loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} color={R.colors.primaryGreen} />
      </View>
    );
  } else {
    return null;
  }
};
