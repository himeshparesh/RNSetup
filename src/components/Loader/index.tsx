import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {R} from '@root/res';
import {useTheme} from '@root/theme/useTheme';

type props = {loading: boolean; color: string};

const Loader = ({loading, color = R.colors.primaryGreen}: props) => {
  const {theme} = useTheme();
  return (
    <Modal
      supportedOrientations={[
        'portrait',
        'landscape',
        'landscape-left',
        'landscape-right',
        'portrait-upside-down',
      ]}
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {}}>
      <View
        style={[styles.modalBackground, {backgroundColor: theme.containerGray}]}
        visible={loading}>
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
