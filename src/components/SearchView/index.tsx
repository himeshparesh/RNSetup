import {Resource} from '@root/res';
import {colors} from '@root/theme/theme';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import CustomButton from '../CustomButton';

export default function searchView({
  cancelIcon,
  placeHolder,
  value,
  onChange,
  onSubmitEditing,
  onClear,
  onCancel,
  styleContainer = {},
}) {
  const styles = StyleSheet.create({
    searchView: {
      backgroundColor: colors.greenLight,
      height: 75,
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    subContainer: {justifyContent: 'center', flex: 1},
    inputStyle: {
      ...Resource.palette.StyleTextInput,
      height: 50,
      paddingHorizontal: 45,
      borderRadius: 10,
      color: colors.black,
      borderColor: colors.black,
    },
  });

  let voidMethod = () => {};

  return (
    <View style={[styles.searchView, styleContainer]}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={colors.black}
          style={styles.inputStyle}
          multiline={false}
          numberOfLines={1}
          autoCapitalize={'none'}
          autoFocus={false}
          selectionColor={colors.black}
          returnKeyType={'search'}
          // keyboardType="web-search"
          onChangeText={onChange ?? voidMethod}
          value={value ?? ''}
          onSubmitEditing={onSubmitEditing ?? voidMethod}
        />
        <CustomButton
          isIconButton={true}
          icon={Resource.images.icons.defaultImg}
          // tintColor={colors.white80}
          height={22}
          resizeMode={'contain'}
          style={{position: 'absolute', left: 15, padding: 0}}
          disabled={true}
        />
        {(value ?? '').length > 0 && (
          <CustomButton
            isIconButton={true}
            icon={Resource.images.icons.defaultImg}
            tintColor={colors.black}
            height={28}
            resizeMode={'contain'}
            style={{position: 'absolute', right: 5, padding: 3}}
            onPress={onClear ?? voidMethod}
          />
        )}
      </View>
    </View>
  );
}
