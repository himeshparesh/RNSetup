import appStyles from '@root/res/appStyles';
import colors from '@root/res/colors';
import {U} from '@root/utility';
import {getDeviceHeight} from '@root/utility/utility';
import React, {ReactNode} from 'react';
import {Pressable, StyleProp, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';

type Props = {
  closeModel?(): void;
  visible: boolean;
  children: ReactNode;
  childStyle?: StyleProp<ViewStyle>;
  customModelStyle?: ViewStyle;
};

export const BottomModal = (props: Props) => {
  return (
    <Modal
      statusBarTranslucent={false}
      avoidKeyboard
      useNativeDriver
      deviceHeight={U.utility.getDeviceHeight()}
      deviceWidth={U.utility.getDeviceWidth()}
      hideModalContentWhileAnimating
      onBackdropPress={() => props?.closeModel && props?.closeModel()}
      animationInTiming={500}
      animationOutTiming={500}
      animationOut="slideOutDown"
      isVisible={props?.visible}
      style={[styles.modelStyle, props?.customModelStyle]}>
      <View style={styles.rootView}>
        <Pressable
          onPress={() => props?.closeModel && props?.closeModel()}
          style={appStyles.flex1}></Pressable>
        <View style={[styles.childView, props?.childStyle]}>
          {props.children}
        </View>
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
  rootView: {
    flex: 1,
  },
  childView: {
    backgroundColor: colors.white,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
});
