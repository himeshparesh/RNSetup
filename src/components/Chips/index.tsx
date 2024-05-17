import appStyles from '@root/res/appStyles';
import {colors} from '@root/theme/theme';
import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Utility} from '@root/utility';

export type ChipsData = {
  label: string;
  value: string;
};

type ChipsProps = {
  listData: ChipsData[];
  label: string;
  onSelect: (selectedList: ChipsData[]) => void;
  selectedFilterTypes: ChipsData[];
};

export const Chips: React.FC<ChipsProps> = props => {
  const [list, setList] = useState<ChipsData[]>(props.selectedFilterTypes);

  const onPressItem = (item: ChipsData, index: number) => {
    const tempList = [...list];
    if (tempList?.length != 0) {
      const findIndex = tempList?.findIndex(
        (listItem: ChipsData) => listItem?.value === item?.value,
      );
      if (findIndex > -1) {
        tempList.splice(findIndex, 1);
        setList([...tempList]);
        props?.onSelect([...tempList]);
      } else {
        tempList?.push(item);
        setList([...tempList]);
        props?.onSelect([...tempList]);
      }
    } else {
      tempList?.push(item);
      setList([...tempList]);
      props?.onSelect([...tempList]);
    }
  };

  const checkOptionsSelected = (item: ChipsData) => {
    const findIndex = props.selectedFilterTypes?.findIndex(
      (selectedItem: ChipsData) => selectedItem?.value === item?.value,
    );
    if (findIndex > -1) {
      return true;
    }
    return false;
  };

  const renderItem = ({item, index}: {item: ChipsData; index: number}) => {
    return (
      <TouchableOpacity
        activeOpacity={Utility.Constants.Constants.activeOpacity}
        onPress={() => onPressItem(item, index)}
        style={[
          styles.renderItem,
          {
            backgroundColor: checkOptionsSelected(item)
              ? colors.primaryGreen
              : colors.white,
          },
        ]}>
        <Text
          style={[
            styles.itemTxt,
            {
              color: checkOptionsSelected(item) ? colors.white : colors.black,
            },
          ]}>
          {item?.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={[appStyles.titleTxt, styles.txtTitle]}>{props.label}</Text>
      <FlatList
        data={props.listData}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainerStyle}
      />
    </View>
  );
};
