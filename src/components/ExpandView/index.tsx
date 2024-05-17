import appStyles from '@root/res/appStyles';
import {Constants} from '@root/utils/Constants';
import React, {ReactNode, useState} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';

import {ArrowDown, DropDownIcon} from '@root/res/svgImages';
import styles from './styles';

type ExpandViewProps = {
  title: string;
  children: ReactNode;
  containerStyle?: ViewStyle;
  label?: string;
};

export const ExpandView: React.FC<ExpandViewProps> = (
  props: ExpandViewProps,
) => {
  const [isShowView, setIsShowView] = useState<boolean>(false);

  return (
    <View style={[styles.container, props?.containerStyle]}>
      <TouchableOpacity
        activeOpacity={Constants.activeOpacity}
        onPress={() => setIsShowView(!isShowView)}
        style={[appStyles.flexRow, styles.clickContainer]}>
        <View style={appStyles.flexRow}>
          <Text style={styles.txtTitle}>{props?.title}</Text>
          {props?.label ? (
            <Text style={styles.txtLabel}>{props?.label}</Text>
          ) : null}
        </View>
        {isShowView ? <ArrowDown /> : <DropDownIcon />}
      </TouchableOpacity>
      <View
        style={[appStyles.dividerView, {display: isShowView ? 'flex' : 'none'}]}
      />
      {isShowView ? props.children : null}
    </View>
  );
};
