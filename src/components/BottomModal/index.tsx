import {colors} from '@root/theme/theme';
import {Utils} from '@root/utils';
import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';

type Props = {
  closeModel?(): void;
  visible: boolean;
  children: ReactNode;
  childStyle?: StyleProp<ViewStyle>;
  customModelStyle?: ViewStyle;
  showBottomSheet?: boolean;
};

export const BottomModal = (props: Props) => {
  return (
    <Modal
      statusBarTranslucent={false}
      avoidKeyboard
      useNativeDriver
      deviceHeight={Utils.Utility.getDeviceHeight()}
      deviceWidth={Utils.Utility.getDeviceWidth()}
      hideModalContentWhileAnimating
      onBackdropPress={() => props?.closeModel && props?.closeModel()}
      animationInTiming={500}
      animationOutTiming={800}
      animationOut="slideOutDown"
      isVisible={props?.visible}
      style={[
        styles.modelStyle,
        props?.customModelStyle,
        {
          justifyContent: props?.showBottomSheet ? 'flex-end' : 'center',
        },
      ]}>
      <View
        style={[
          styles.childView,
          props?.childStyle,
          props?.showBottomSheet ? styles.bottomContent : styles.centerContent,
        ]}>
        {props.children}
      </View>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  modelStyle: {
    margin: 0,
    justifyContent: 'flex-end',
    marginTop: moderateScale(50),
  },
  childView: {
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  bottomContent: {
    marginHorizontal: moderateScale(0),
  },
  centerContent: {
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(16),
    borderBottomLeftRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
});
