import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {R} from '@root/res';
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
      backgroundColor: R.colors.lightGray,
      height: 75,
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    subContainer: {justifyContent: 'center', flex: 1},
    inputStyle: {
      ...R.palette.StyleTextInput,
      height: 50,
      paddingHorizontal: 45,
      borderRadius: 10,
      color: R.colors.black,
      borderColor: R.colors.lightGray20,
    },
  });

  let voidMethod = () => {};

  return (
    <View style={[styles.searchView, styleContainer]}>
      <View style={styles.subContainer}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={R.colors.lightGray40}
          style={styles.inputStyle}
          multiline={false}
          numberOfLines={1}
          autoCapitalize={'none'}
          autoFocus={false}
          selectionColor={R.colors.black}
          returnKeyType={'search'}
          // keyboardType="web-search"
          onChangeText={onChange ?? voidMethod}
          value={value ?? ''}
          onSubmitEditing={onSubmitEditing ?? voidMethod}
        />
        <CustomButton
          isIconButton={true}
          icon={R.images.icons.search}
          // tintColor={R.colors.white80}
          height={22}
          resizeMode={'contain'}
          style={{position: 'absolute', left: 15, padding: 0}}
          disabled={true}
        />
        {(value ?? '').length > 0 && (
          <CustomButton
            isIconButton={true}
            icon={R.images.icons.delete}
            tintColor={R.colors.black}
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
