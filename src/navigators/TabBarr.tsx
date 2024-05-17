import React from 'react';

import {Resource} from '@root/res';
import {Dashboard, DashboardFilled} from '@root/res/svgImages';
import {colors} from '@root/theme/theme';
import {Utility} from '@root/utility';
import {useTranslation} from 'react-i18next';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const TabBar = ({state, descriptors, navigation}: any) => {
  const {t} = useTranslation();

  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route: any, index: number, focused: any) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        let screenLabel;
        let labelColor;
        const getSVGIcons = () => {
          switch (route.name) {
            case Resource.globals.navigationRouteNames.dashboard:
              screenLabel = 'Dashboard';
              labelColor = isFocused ? colors.primaryGreen : colors.gray;
              return isFocused ? <DashboardFilled /> : <Dashboard />;

            default:
              break;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index} style={[styles.mainItemContainer]}>
            <Pressable onPress={onPress} style={{alignItems: 'center'}}>
              {getSVGIcons()}
              <Text
                numberOfLines={1}
                style={[styles.txtTab, {color: labelColor}]}>
                {screenLabel}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: Utility.utility.getOS() == 'ios' ? 0 : 0,
    backgroundColor: colors.white,
    borderRadius: moderateScale(35),
    borderWidth: moderateScale(1),
    borderColor: colors.gray,
    marginHorizontal: moderateScale(20),
  },
  mainItemContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(15),
    borderRadius: moderateScale(1),
  },
  txtTab: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.SubTitle,
      Resource.fonts['Karla-Medium'],
      colors.black,
    ),
    marginTop: moderateScale(4),
  },
});

export default TabBar;
