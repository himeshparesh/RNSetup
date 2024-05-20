import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Post} from '../../types';
import {styles} from './styles';
import {SectionTitle} from '@root/components/SectionTitle';
import {useTranslation} from 'react-i18next';

type Props = {
  list: Post[];
  onItemClick: (item: Post) => void;
};

export const PostList: React.FC<Props> = props => {
  const {t} = useTranslation();
  const PostItem = ({item, index}: ListRenderItemInfo<Post>) => {
    return (
      <TouchableOpacity
        onPress={() => props?.onItemClick(item)}
        style={styles.container}>
        <Text numberOfLines={1} style={styles.txtTitle}>
          Title: <Text style={styles.txtTitleData}>{item?.title}</Text>
        </Text>
        <Text numberOfLines={3} style={styles.txtTitle}>
          Description: <Text style={styles.txtTitleData}>{item?.body}</Text>
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{display: props?.list?.length > 0 ? 'flex' : 'none'}}>
      <SectionTitle
        title={t('label.posts')}
        style={styles.contentMarginSpacing}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props?.list}
        renderItem={PostItem}
      />
    </View>
  );
};