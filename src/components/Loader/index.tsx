import {colors} from '@root/theme/theme';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';

type props = {loading: boolean; color?: string};

const Loader: React.FC<props> = ({
  loading,
  color = colors.primaryGreen,
}: props) => {
  return (
    <Modal isVisible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} size="large" color={color} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  activityIndicatorWrapper: {
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
