import {colors} from '@root/theme/theme';
import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

type props = {loading: boolean; color?: string};

const Loader: React.FC<props> = (props: props) => {
  const {loading, color = colors.primaryGreen} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {}}>
      <View
        style={[
          styles.modalBackground,
          {backgroundColor: colors.black00000040},
        ]}>
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
