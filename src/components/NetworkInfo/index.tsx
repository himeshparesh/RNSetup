import NetInfo from '@react-native-community/netinfo';
import {R} from '@root/res';
import {NoInternet} from '@root/res/svgImages';
import {U} from '@root/utility';
import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const NetworkInfo = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let eventUnSubscriber = NetInfo.addEventListener(handleConnectivityChange);

    return () => {
      if (eventUnSubscriber) {
        eventUnSubscriber();
      }
    };
  }, []);

  const handleConnectivityChange = state => {
    setIsConnected(state.isConnected);
  };

  return (
    <Modal visible={!isConnected} transparent={true} animationType={'fade'}>
      <View style={styles.offlineContainer}>
        <View style={styles.centerContent}>
          <NoInternet height={100} width={100} />
          <Text style={styles.offlineText}>
            No Internet Connection, Make sure you are connected to Internet!
          </Text>
        </View>
      </View>
    </Modal>
  );
};



export default NetworkInfo;
