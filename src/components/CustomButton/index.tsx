import {colors} from '@root/theme/theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  ImageBackground,
  ImageResizeMode,
  ImageSourcePropType,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Badge, Button} from 'react-native-ui-lib';
import WithPreventDoubleClick from '../WithPreventDoubleClick';

export interface Props {
  isIconButton?: boolean;
  isSquare?: boolean;
  icon?: ImageSourcePropType | any;
  height?: number | string;
  width?: number | string;
  bgColor?: string;
  tintColor?: string;
  resizeMode?: ImageResizeMode;
  onPress?: () => void;
  title?: string;
  labelStyle?: TextStyle;
  noDebounce?: boolean;
  badgeNumber?: number | string;
  isSvg?: boolean;
  isLoading?: boolean;
  loadingColor?: string;
}

const CustomButton = ({
  isIconButton,
  isSquare,
  icon, //= Resource.images.header.back,
  height,
  width,
  bgColor,
  tintColor,
  resizeMode = 'stretch',
  title,
  labelStyle,
  onPress,
  noDebounce,
  badgeNumber,
  isSvg,
  isLoading,
  ...props
}: Props) => {
  const {t} = useTranslation();
  const styles = StyleSheet.create({
    styleButton: {
      borderRadius: moderateScale(8),
      height: height || '85%',
      width: isSquare ? undefined : width || undefined,
      aspectRatio: isSquare ? 1 : undefined,
      padding: moderateScale(4),
      backgroundColor: bgColor || colors.transparent,
    },
    styleImage: {
      height: '100%',
      aspectRatio: 1,
    },
    badgeContainer: {
      position: 'absolute',
      top: moderateVerticalScale(-4),
      right: moderateScale(-5),
    },
  });

  const renderTextButton = () => {
    return isLoading ? (
      <View
        style={[styles.styleButton, {justifyContent: 'center'}, props.style]}>
        <ActivityIndicator
          size={'small'}
          color={props?.loadingColor || colors.primaryGreen}
        />
      </View>
    ) : (
      <Button
        avoidInnerPadding
        avoidMinWidth
        label={title || t('buttonTitle.back')}
        labelStyle={labelStyle}
        enableShadow={false}
        onPress={onPress}
        {...props}
        style={[styles.styleButton, props.style]}
      />
    );
  };

  const renderIconButton = () => {
    return (
      <Button
        avoidInnerPadding
        avoidMinWidth
        onPress={onPress}
        {...props}
        style={[styles.styleButton, props.style]}>
        {isLoading ? (
          <ActivityIndicator
            size={'small'}
            color={props?.loadingColor || colors.primaryGreen}
          />
        ) : isSvg ? (
          icon
        ) : (
          <ImageBackground
            style={styles.styleImage}
            imageStyle={{tintColor: tintColor}}
            source={icon}
            resizeMode={resizeMode}
          />
        )}
        {badgeNumber !== undefined && Number(badgeNumber) > 0 && (
          <Badge
            backgroundColor={colors.primaryGreen}
            label={badgeNumber}
            containerStyle={styles.badgeContainer}
          />
        )}
      </Button>
    );
  };

  return isIconButton ? renderIconButton() : renderTextButton();
};

export default WithPreventDoubleClick(CustomButton);
