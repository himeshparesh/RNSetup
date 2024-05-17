import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {
  ImageStyle,
  ViewStyle,
  TextStyle,
  FlexStyle,
  Platform,
} from 'react-native';
import {colors} from '@root/theme/theme';
export enum FontSizes {
  Header = 30,
  Body = 24,
  Title = 20,
  Large = 18,
  Medium = 16,
  small15 = 15,
  Small = 14,
  SubTitle = 12,
  Label = 13,
  SubSmallTitle = 10,
  verySmall = 8,
  extraLarge = 40,
}
export enum ButtonSizes {
  small = 34,
  normal = 44,
  large = 60,
}

export enum Spacing {
  HR10 = moderateScale(10),
  HR12 = moderateScale(12),
  HR14 = moderateScale(14),
  HR16 = moderateScale(16),
  VR10 = moderateVerticalScale(10),
  VR12 = moderateVerticalScale(12),
  VR14 = moderateVerticalScale(14),
  VR16 = moderateVerticalScale(16),
}

export type StyleType = ViewStyle | TextStyle | ImageStyle | FlexStyle | any;

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const centerHorizontal = {alignItems: 'center'};
export const centerVertical = {justifyContent: 'center'};
export const fillParent = {flex: 1};
export const flexRowSpaceBetween = {
  flexDirection: 'row',
  justifyContent: 'space-around',
};
export const flexHorizontal = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  ...centerHorizontal,
};
export const flexRow = {flexDirection: 'row', ...centerHorizontal};
export const centerInPatentFlex = {
  ...centerHorizontal,
  ...centerVertical,
  ...fillParent,
};
export const centerInPatent = {...centerHorizontal, ...centerVertical};
export const fillWidth = {width: '100%'};
export const fillHeight = {height: '100%'};

export const setBGColor = (value: string) => {
  return {backgroundColor: value};
};
export const setColor = (value: string) => {
  return {color: value};
};
export const setFontSize = (value: FontSizes) => {
  return {fontSize: value};
};
export const setFontWeight = (value: FontWeight) => {
  return {fontWeight: value};
};

export const setFontFamily = (value: string) => {
  return {fontFamily: value};
};

export const StyleContainer = (
  bgColor: string = colors.darkGray,
): StyleType => {
  return {
    ...fillParent,
    ...setBGColor(bgColor),
  };
};

export const StyleText = (
  fontSize: FontSizes = FontSizes.Medium,
  family: string = 'Karla-Regular',
  color: string = colors.black,
): StyleType => {
  return {
    ...setFontSize(fontSize),
    ...setFontFamily(family),
    ...setColor(color),
  };
};

export const StyleTextInput = {
  FontSizes: FontSizes.Medium,
  paddingHorizontal: 15,
  borderRadius: 5,
  height: 44,
  borderColor: colors.black80,
  borderWidth: 1,
};

export const TextField = (containerStyle: StyleType, style: StyleType) => {
  let selectionColor =
    Platform.OS == 'ios' ? (style && style.color) ?? colors.white : undefined;
  return {
    enableErrors: true,
    useTopErrors: true,
    validateOnChange: true,
    title: ' ',
    placeholderTextColor: colors.black,
    autoCapitalize: 'none',
    autoCorrect: false,
    clearButtonMode: 'while-editing',
    hideUnderline: true,
    containerStyle: containerStyle,
    selectionColor: selectionColor,
    style: {
      height: 44,
      ...setColor(colors.black),
      color: colors.black,
      borderWidth: 1,
      borderColor: colors.black,
      borderRadius: 3,
      paddingLeft: 10,
      textAlignVertical: 'center',
      ...fillWidth,
      ...style,
    },
  };
};
