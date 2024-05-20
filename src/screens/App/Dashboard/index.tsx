import CustomButton from '@root/components/CustomButton';
import Layout from '@root/components/Layout';
import Loader from '@root/components/Loader';
import {SectionTitle} from '@root/components/SectionTitle';
import CustomText from '@root/components/TextButton';
import {RootState} from '@root/store/configureStore';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {PhotoList} from './components/PhotoList';
import {PostList} from './components/PostList';
import {PostListNew} from './components/PostListNew';
import styles from './styles';
import {useDashboard} from './useDashboard';

const Dashboard = () => {
  const dashboardData = useSelector((state: RootState) => state.dashboard);

  const {
    handleLogout,
    onChangeLanguage,
    onPermissionClick,
    AppSettingsAlert,
    onRefreshClick,
    onPostClick,
    onPhotoClick,
    onNewPostClick,
    onNewPostEndReached,
    onFormClick,
    loadMore,
  } = useDashboard();
  const {t} = useTranslation();

  return (
    <Layout>
      <ScrollView>
        <TouchableOpacity onPress={handleLogout} style={styles.contentSpacing}>
          <SectionTitle title={t('label.dashboard')} />
        </TouchableOpacity>

        <View style={styles.contentMarginSpacing}>
          <CustomButton
            onPress={onRefreshClick}
            title={t('buttonTitle.refresh')}
            viewStyle={styles.contentMarginSpacing}
          />
        </View>

        <PostListNew
          postData={dashboardData?.newPosts}
          onItemClick={onNewPostClick}
          onEndReached={onNewPostEndReached}
          loadMore={loadMore}
        />

        <PostList
          title={t('label.posts')}
          list={dashboardData?.posts}
          onItemClick={onPostClick}
        />

        <PostList
          title={t('label.graphPost')}
          list={dashboardData?.graphPosts?.data}
          onItemClick={onPostClick}
        />

        <PhotoList list={dashboardData?.photos} onItemClick={onPhotoClick} />

        <View style={styles.contentMarginSpacing}>
          <SectionTitle title={t('label.language')} />
          <CustomText
            text={t('text.testing')}
            style={{marginVertical: moderateVerticalScale(8)}}
          />
          <CustomButton
            title={t('buttonTitle.changeLanguage')}
            onPress={onChangeLanguage}
          />

          <SectionTitle title={t('label.persmission')} />
          <CustomButton
            title={t('buttonTitle.permission')}
            onPress={onPermissionClick}
          />

          <SectionTitle title={t('label.form')} />
          <CustomButton onPress={onFormClick} title={t('buttonTitle.form')} />
        </View>
      </ScrollView>
      <Loader loading={dashboardData?.loader} />
      <AppSettingsAlert />
    </Layout>
  );
};

export default Dashboard;
