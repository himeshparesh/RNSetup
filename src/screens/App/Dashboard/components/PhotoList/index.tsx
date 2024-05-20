import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Photo} from '../../types';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {SectionTitle} from '@root/components/SectionTitle';

type Props = {
  list: Photo[];
  onItemClick: (item: Photo) => void;
};

export const PhotoList: React.FC<Props> = props => {
  const {t} = useTranslation();

  const PhotoItem = ({item, index}: ListRenderItemInfo<Photo>) => {
    return (
      <TouchableOpacity
        onPress={() => props?.onItemClick(item)}
        style={styles.container}>
        <FastImage source={{uri: item?.url}} style={styles.imgStyle} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.rootView,
        {display: props?.list?.length > 0 ? 'flex' : 'none'},
      ]}>
      <SectionTitle
        title={t('label.photos')}
        style={styles.contentMarginSpacing}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props?.list}
        renderItem={PhotoItem}
      />
    </View>
  );
};
