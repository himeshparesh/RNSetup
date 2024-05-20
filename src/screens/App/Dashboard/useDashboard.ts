import {usePermission} from '@root/hooks/usePermission';
import {keys} from '@root/res/global';
import {photosThunk, postNewThunk, postThunk} from '@root/store/ThunkActions';
import {RootState} from '@root/store/configureStore';
import {removeHomeData, showLoader} from '@root/store/reducers/DashboardSlice';
import {storeToken} from '@root/store/reducers/LoginSlice';
import {Utils} from '@root/utils';
import {Languages} from '@root/utils/Constants';
import i18next from 'i18next';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions';
import {useDispatch, useSelector} from 'react-redux';
import {Photo, Post, PostNew} from './types';

export const useDashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state: RootState) => state.dashboard);
  const {t} = useTranslation();
  const {checkAndRequestPermission, AppSettingsAlert} = usePermission();
  const [page, setPageNum] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  useEffect(() => {
    fetchInitial();
  }, []);

  const fetchInitial = () => {
    dispatch(showLoader(true));
    dispatch(removeHomeData());
    fetchPosts();
    fetchPhotos();
    setPageNum(1);
    fetchNewPost(1, false);
  };

  const onRefreshClick = () => {
    fetchInitial();
  };

  const handleLogout = () => {
    dispatch(storeToken(''));
  };

  const onChangeLanguage = async () => {
    const curLang = await Utils.Utility.getLocalDataByKey(
      keys.KEY_CURRENT_LANGUAGE,
    );
    if (curLang === Languages.english) {
      Utils.Utility.setLocalDataByKey(
        keys.KEY_CURRENT_LANGUAGE,
        Languages.french,
      ).then(() => {
        i18next.changeLanguage(Languages.french);
      });
    } else {
      Utils.Utility.setLocalDataByKey(
        keys.KEY_CURRENT_LANGUAGE,
        Languages.english,
      ).then(() => {
        i18next.changeLanguage(Languages.english);
      });
    }
  };

  const onPermissionClick = () => {
    const permission = Platform.select({
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    });
    checkAndRequestPermission(permission);
  };

  const onPostClick = (item: Post) => {};
  const onPhotoClick = (item: Photo) => {};
  const onNewPostClick = (item: PostNew) => {};

  const onFormClick = () => {
    // navigation.navigate(ScreenNames.Form);
  };

  const fetchPosts = () => {
    const data = {useJSON: true, isToken: false};
    dispatch(postThunk(data));
  };

  const fetchPhotos = () => {
    const data = {useJSON: true, isToken: false};
    dispatch(photosThunk(data));
  };

  const fetchNewPost = (page: number, forPagination: boolean) => {
    const data = {
      useJSON: true,
      isToken: false,
      extraParams: {forPagination},
      page,
      limit: 5,
    };
    dispatch(postNewThunk(data));
  };

  const onNewPostEndReached = () => {
    if (
      page + 1 <= (dashboardData?.newPosts && dashboardData?.newPosts?.total) &&
      !loadMore
    ) {
      setPageNum(val => val + 1);
      setLoadMore(true);
      fetchNewPost(page + 1, true);
    }
  };

  return {
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
  };
};
