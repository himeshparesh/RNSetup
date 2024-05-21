import {Resource} from '@root/res';
import appStyles from '@root/res/appStyles';
import {colors} from '@root/theme/theme';
import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {BottomModal} from '../BottomModal';
import CustomButton from '../CustomButton';
import styles from './styles';

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
      showBottomSheet={false}>
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
        <View style={{...Resource.palette.flexRowSpaceBetween}}>
          {props?.showBothBtn ? (
            <CustomButton
              title={props?.secondaryBtnText}
              bgColor={colors.primaryGreen}
              width="70%"
              labelStyle={{
                ...Resource.palette.StyleText(
                  Resource.palette.FontSizes.Small,
                  Resource.fonts['Karla-ExtraBold'],
                  colors.white,
                ),
              }}
              style={styles.btnStyle}
              onPress={onSecondaryClick}
            />
          ) : null}

          <CustomButton
            title={props?.primaryBtnText}
            bgColor={colors.primaryGreen}
            width="70%"
            labelStyle={{
              ...Resource.palette.StyleText(
                Resource.palette.FontSizes.Small,
                Resource.fonts['Karla-ExtraBold'],
                colors.white,
              ),
            }}
            style={styles.btnStyle}
            onPress={onPrimaryClick}
          />
        </View>
      </View>
    </BottomModal>
  );
};
