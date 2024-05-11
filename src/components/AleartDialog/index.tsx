import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import styles from './styles';
import {BottomModal} from '../BottomModal';
import appStyles from '@root/res/appStyles';
import {R} from '@root/res';
import CustomButton from '../CustomButton';

type CustomAlertDialogue = {
  visible: boolean;
  title?: string;
  message: string;
  showBothBtn: boolean;
  primaryBtnText: string;
  secondaryBtnText?: string;
  primaryBtnStyle?: ViewStyle;
  secondaryBtnStyle?: ViewStyle;
  onCloseClick: () => void;
  onPrimaryBtnClick: () => void;
  onSecondaryBtnClick?: () => void;
};

export const AleartDialog: React.FC<CustomAlertDialogue> = props => {
  const onCloseClick = () => {
    props?.onCloseClick && props?.onCloseClick();
  };

  const onPrimaryClick = () => {
    onCloseClick();
    props?.onPrimaryBtnClick();
  };

  const onSecondaryClick = () => {
    onCloseClick();
    props?.onSecondaryBtnClick && props?.onSecondaryBtnClick();
  };

  return (
    <BottomModal
      visible={props?.visible}
      closeModel={onCloseClick}
      showBottomSheet={false}
      itemStyle={styles.centerStyle}>
      <View style={appStyles.centerAlignStyle}>
        {props?.title ? (
          <Text
            style={[
              appStyles.bold20TextStyle,
              {marginVertical: moderateScale(12)},
            ]}>
            {props?.title}
          </Text>
        ) : null}
        <Text
          style={[appStyles.bold16TextStyle, styles.messageStyle]}
          numberOfLines={15}>
          {props?.message}
        </Text>
        <View style={{...R.palette.flexRowSpaceBetween}}>
          {props?.showBothBtn ? (
            <CustomButton
              title={props?.secondaryBtnText}
              bgColor={R.colors.white}
              height={50}
              width="70%"
              labelStyle={{
                ...R.palette.StyleText(
                  R.palette.FontSizes.SubTitle,
                  R.fonts['Karla-ExtraBold'],
                  R.colors.black,
                ),
              }}
              style={[styles.btnStyle]}
              onPress={onSecondaryClick}
            />
          ) : null}

          <CustomButton
            title={props?.primaryBtnText}
            bgColor={R.colors.white}
            height={50}
            width="70%"
            labelStyle={{
              ...R.palette.StyleText(
                R.palette.FontSizes.SubTitle,
                R.fonts['Karla-ExtraBold'],
                R.colors.black,
              ),
            }}
            style={[styles.btnStyle]}
            onPress={onPrimaryClick}
          />
        </View>
      </View>
    </BottomModal>
  );
};
