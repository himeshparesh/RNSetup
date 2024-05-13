import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, StyleSheet, Modal, Alert} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {R} from '@root/res';
import {U} from '@root/utility';
import {Dashboard, DashboardFilled, NoInternet} from '@root/res/svgImages';
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

  console.log('isConnected', isConnected);

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

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: R.colors.red1,
    height: U.utility.getDeviceHeight() * 0.3,
    alignSelf: 'center',
    width: moderateScale(250),
    top: U.utility.getDeviceHeight() * 0.35,
    borderRadius: 20,
  },
  offlineText: {color: '#fff', textAlign: 'center', paddingHorizontal: 40},
  centerContent: {flex: 1, alignItems: 'center', justifyContent: 'center'}
});

export default NetworkInfo;
