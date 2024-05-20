import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PostNew} from '../../types';
import {styles} from './styles';

type Props = {
  postData: PostNew;
  onItemClick: (item: PostNew) => void;
};

export const PostRenderItem: React.FC<Props> = props => {
  return (
    <TouchableOpacity
      onPress={() => props?.onItemClick(props?.postData)}
      style={styles.container}>
      <FastImage
        source={{uri: props?.postData?.image}}
        style={styles.imgPost}
      />
      <Text numberOfLines={2} style={styles.txtText}>
        {props?.postData?.text}
      </Text>
    </TouchableOpacity>
  );
};
