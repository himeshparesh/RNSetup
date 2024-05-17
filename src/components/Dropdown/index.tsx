import {Resource} from '@root/res';
import appStyles from '@root/res/appStyles';
import fonts from '@root/res/fonts';
import {FontSizes} from '@root/res/palette';
import {colors} from '@root/theme/theme';
import {Constants} from '@root/utility/Constants';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {TextStyle} from 'react-native-size-matters';
import {BottomModal} from '../BottomModal';
import CommonTextInput from '../CommonTextInput';
import styles from './styles';

type ListData = {
  value: string;
  label: string;
};

type DropdownProps = {
  value: string;
  listData: ListData[];
  placeHolder: string;
  selectedItem?: (value: string) => void;
  selectedItemData?: (item: any) => void;
  customStyle?: TextStyle;
  dataKey?: string;
};

export const Dropdown: React.FC<DropdownProps> = props => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props?.value);

  useEffect(() => {
    setValue(props?.value);
  }, [props]);

  const handleSelectItem = (item: any) => {
    if (props?.selectedItemData) {
      props.selectedItemData(item);
    } else if (props?.selectedItem) props.selectedItem(item?.value);

    setVisible(false);
  };

  const onPress = () => {
    setVisible(true);
  };

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.renderItemView}
      onPress={() => handleSelectItem(item)}
      activeOpacity={Constants.activeOpacity}>
      <Text
        style={Resource.palette.StyleText(
          FontSizes.Small,
          fonts['Karla-Regular'],
        )}>
        {props?.dataKey ? item[props?.dataKey] : item?.value}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <TouchableOpacity
        activeOpacity={Constants.activeOpacity}
        onPress={onPress}>
        <CommonTextInput
          disabled={false}
          key={'color'}
          outlineColor={colors.grayD3D4D5}
          activeOutlineColor={colors.grayD3D4D5}
          pointerEvents={'none'}
          caretHidden
          value={value}
          placeHolder={props?.placeHolder}
          showDropDownIcon
        />
      </TouchableOpacity>
      <BottomModal
        visible={visible}
        closeModel={() => {
          setVisible(false);
        }}>
        <Text style={[appStyles.titleTxt, styles.txtTitle]}>
          {props?.placeHolder}
        </Text>
        <FlatList data={props?.listData} renderItem={renderItem} />
      </BottomModal>
    </>
  );
};
