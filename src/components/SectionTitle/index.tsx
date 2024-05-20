import React from 'react';
import {View, ViewStyle} from 'react-native';
import CustomText from '../TextButton';
import {styles} from './style';

type Props = {
  title: string;
  style?: ViewStyle;
};

export const SectionTitle: React.FC<Props> = (props: Props) => {
  return (
    <View style={[styles.container, props?.style]}>
      <CustomText text={props?.title} style={styles.txtTitle} />
    </View>
  );
};
