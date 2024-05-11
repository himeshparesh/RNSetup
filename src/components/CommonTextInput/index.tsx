import colors from '@root/res/colors';
import React from 'react';
import {
  Keyboard,
  KeyboardTypeOptions,
  ReturnKeyType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './styles';
import {R} from '@root/res';
import {FontSizes} from '@root/res/palette';
import fonts from '@root/res/fonts';
import appStyles from '@root/res/appStyles';
import {DropDownIcon, PasswordHide, PasswordVisible} from '@root/res/svgImages';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {TextStyle, ViewStyle} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

interface Props {
  placeHolder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  onSubmit?: () => void;
  returnType?: ReturnKeyType;
  keyboardType?: KeyboardTypeOptions;
  customStyle?: TextStyle | ViewStyle;
  outlinedStyle?: ViewStyle;
  mode?: 'flat' | 'outlined';
  secureTextEntry?: boolean;
  editable?: boolean;
  onPressIn?: () => void;
  caretHidden?: boolean;
  maxLength?: number;
  key?: string;
  disabled?: boolean;
  isPasswordVisible?: boolean;
  setIsPasswordVisible?: (value: boolean) => void;
  onPressOut?: () => void;
  activeOutlineColor?: string;
  outlineColor?: string;
  showDropDownIcon?: boolean;
  dropDownIcnStyle?: ViewStyle;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  isMultiline?: boolean;
  isShowOptional?: boolean;
}

const CommonTextInput = ({
  placeHolder,
  value,
  returnType = 'done',
  onChangeText,
  onSubmit = () => Keyboard.dismiss(),
  keyboardType = 'default',
  customStyle,
  outlinedStyle,
  mode = 'outlined',
  secureTextEntry = false,
  editable = true,
  onPressIn,
  caretHidden,
  maxLength,
  key,
  disabled = false,
  isPasswordVisible,
  setIsPasswordVisible,
  onPressOut,
  activeOutlineColor,
  outlineColor,
  showDropDownIcon = false,
  dropDownIcnStyle,
  pointerEvents,
  isMultiline,
  isShowOptional = false,
}: Props) => {
  const {t} = useTranslation();
  return (
    <View style={[appStyles.rowCenter]} pointerEvents={pointerEvents}>
      <TextInput
        disabled={disabled}
        key={key}
        label={placeHolder}
        value={value}
        mode={mode}
        editable={editable}
        onPressIn={onPressIn}
        outlineColor={outlineColor || colors.gray}
        activeOutlineColor={activeOutlineColor || colors.primaryGreen}
        onChangeText={onChangeText}
        theme={{roundness: 12}}
        secureTextEntry={isPasswordVisible}
        outlineStyle={[styles.outlinedStyle, outlinedStyle]}
        style={[
          styles.textInputStyle,
          customStyle,
          secureTextEntry && {paddingRight: moderateScale(35)},
        ]}
        onSubmitEditing={onSubmit}
        returnKeyType={returnType}
        keyboardType={keyboardType}
        multiline={isMultiline}
        caretHidden={caretHidden}
        contentStyle={R.palette.StyleText(
          FontSizes.small15,
          fonts['Karla-Medium'],
        )}
        maxLength={maxLength}
        onPressOut={onPressOut}
      />
      {secureTextEntry ? (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.passwordIconStyle}>
          {isPasswordVisible ? <PasswordVisible /> : <PasswordHide />}
        </TouchableOpacity>
      ) : null}
      {showDropDownIcon ? (
        <TouchableOpacity
          onPress={() => onPressIn}
          style={[styles.dropDownIconStyle, dropDownIcnStyle]}>
          <DropDownIcon />
        </TouchableOpacity>
      ) : null}
      {isShowOptional ? (
        <Text style={styles.optionalText}>{t('text.optional')}</Text>
      ) : null}
    </View>
  );
};

export default CommonTextInput;
