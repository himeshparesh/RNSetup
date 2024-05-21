import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {NoInternet} from '@root/res/svgImages';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Modal, Text, View} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';
import styles from './styles';

const NetworkInfo: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const {t} = useTranslation();

  useEffect(() => {
    let eventUnSubscriber = NetInfo.addEventListener(handleConnectivityChange);

    return () => {
      if (eventUnSubscriber) {
        eventUnSubscriber();
      }
    };
  }, []);

  const handleConnectivityChange = (state: NetInfoState) => {
    setIsConnected(state.isConnected);
  };

  return (
    <Modal visible={!isConnected} transparent={true} animationType={'fade'}>
      <View style={styles.offlineContainer}>
        <View style={styles.centerContent}>
          <NoInternet
            height={moderateVerticalScale(100)}
            width={moderateVerticalScale(100)}
          />
          <Text style={styles.offlineText}>
            {t('text.noInternetConnectionMsg')}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default NetworkInfo;
