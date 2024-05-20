import {Footer} from '@root/components/Footer';
import React from 'react';
import {FlatList, ListRenderItemInfo, Text, View} from 'react-native';
import {NewPostData, PostNew} from '../../types';
import {PostRenderItem} from './PostRenderItem';
import {styles} from './styles';
import {SectionTitle} from '@root/components/SectionTitle';
import {useTranslation} from 'react-i18next';

type Props = {
  postData: NewPostData;
  onItemClick: (item: PostNew) => void;
  onEndReached: () => void;
  loadMore: boolean;
};

export const PostListNew: React.FC<Props> = props => {
  const {t} = useTranslation();

  const PostItem = ({item, index}: ListRenderItemInfo<PostNew>) => {
    return <PostRenderItem postData={item} onItemClick={props?.onItemClick} />;
  };

  return (
    <View
      style={[
        styles.rootView,
        {display: props?.postData?.data?.length > 0 ? 'flex' : 'none'},
      ]}>
      <SectionTitle
        title={t('label.newPosts')}
        style={styles.contentMarginSpacing}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props?.postData?.data}
        renderItem={PostItem}
        onEndReachedThreshold={0.3}
        onEndReached={() => props.onEndReached()}
        ListFooterComponent={() => <Footer loading={props?.loadMore} />}
      />
    </View>
  );
};
