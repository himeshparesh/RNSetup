import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import React, {useState} from 'react';
import {ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '../CustomButton';

export interface Props {
  useSeparator?: boolean;
  bgColor?: string;
  tintColor?: string;
  title?: string;
  useIconForLeftButton?: boolean;
  leftButtonAction?: () => void;
  leftButtonIcon?: ImageSourcePropType | any;
  leftButtonTitle?: string;
  leftButtons?: any;
  useIconForRightButton?: boolean;
  rightButtons?: any;
  rightButtonIcon?: ImageSourcePropType;
  rightButtonTitle?: string;
  rightButtonAction?: () => void;
  isSvg?: boolean;
  centerImg?: any;
}

const Header = ({
  bgColor,
  tintColor,
  title,
  useIconForLeftButton = true,
  leftButtonIcon,
  leftButtonTitle,
  leftButtonAction,
  leftButtons,
  useIconForRightButton = true,
  rightButtonIcon,
  rightButtonTitle,
  rightButtonAction,
  rightButtons,
  useSeparator = true,
  isSvg = false,
  centerImg,
}: Props) => {
  const [leftViewWidth, setLeftViewWidth] = useState(-1);
  const [rightViewWidth, setRightViewWidth] = useState(-1);
  const [finalWidth, setFinalWidth] = useState(-1);

  const renderSeparator = () => {
    return <View style={styles.styleSeparator} />;
  };

  const renderSideView = (isRightView = false) => {
    return (
      <View
        style={[
          styles.sideViewStyle,
          {width: finalWidth || 'auto'},
          isRightView && {justifyContent: 'flex-end'},
        ]}
        onLayout={event => {
          var firstViewWidth = isRightView ? rightViewWidth : leftViewWidth;
          var secondViewWidth = isRightView ? leftViewWidth : rightViewWidth;
          if ((finalWidth && firstViewWidth) === -1) {
            var val = event.nativeEvent.layout.width;
            if (secondViewWidth !== -1) {
              var finalVal = Math.max(secondViewWidth, val);
              setFinalWidth(finalVal);
            } else {
              isRightView ? setRightViewWidth(val) : setLeftViewWidth(val);
            }
          }
        }}>
        {isRightView ? rightView() : leftView()}
      </View>
    );
  };

  const leftView = () => {
    if (leftButtons) {
      return leftButtons;
    } else {
      return (
        <CustomButton
          isIconButton={useIconForLeftButton}
          icon={leftButtonIcon}
          tintColor={tintColor}
          title={leftButtonTitle}
          onPress={leftButtonAction}
          isSvg={isSvg}
        />
      );
    }
  };

  const rightView = () => {
    if (rightButtons) {
      return rightButtons;
    } else {
      return (
        <CustomButton
          isIconButton={useIconForRightButton}
          icon={rightButtonIcon}
          tintColor={tintColor}
          title={rightButtonTitle}
          onPress={rightButtonAction}
          isSvg={isSvg}
        />
      );
    }
  };

  return (
    <View
      style={[
        styles.styleContainer,
        {backgroundColor: bgColor || colors.white},
      ]}>
      <View style={styles.styleSubContainer}>
        {renderSideView()}
        {centerImg ? (
          centerImg
        ) : (
          <Text
            numberOfLines={1}
            allowFontScaling={false}
            minimumFontScale={0.5}
            style={styles.styleTitle}>
            {title}
          </Text>
        )}
        {renderSideView(true)}
      </View>
      {useSeparator && renderSeparator()}
    </View>
  );
};

const styles = StyleSheet.create({
  styleSeparator: {
    height: moderateScale(1),
    backgroundColor: colors.lightGrayE5E5,
    width: '100%',
  },
  styleContainer: {
    height: moderateScale(55),
    width: '100%',
  },
  styleSubContainer: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(16),
    flex: 1,
    alignItems: 'center',
  },
  styleTitle: {
    textAlign: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    height: 'auto',
    flex: 1,
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Title,
      Resource.fonts['Karla-Bold'],
      colors.black,
    ),
  },
  sideViewStyle: {
    flexDirection: 'row',
  },
});

export default Header;
