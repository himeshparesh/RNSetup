import {R} from '@root/res';
import appStyles from '@root/res/appStyles';
import {EmptyStock} from '@root/res/svgImages';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScaledSheet, moderateVerticalScale} from 'react-native-size-matters';
import {Text, View} from 'react-native-ui-lib';
import CustomButton from '../CustomButton';

type EmptyViewProps = {
  isDetailScreen?: boolean;
  message: string;
  handleBackToHome?: () => void;
};

export const EmptyView: React.FC<EmptyViewProps> = (props: EmptyViewProps) => {
  const {t} = useTranslation();
  if (props?.isDetailScreen) {
    return (
      <View
        style={[appStyles.rootContainerBgGrey, styles.detailedContainerStyle]}>
        <View />
        <View>
          <EmptyStock />
          <Text style={styles.txtEmpty}>{props?.message}</Text>
        </View>
        <CustomButton
          label={t('buttonTitle.backToHome')}
          height={45}
          bgColor={R.colors.primaryGreen}
          width={'90%'}
          labelStyle={styles.regularTxtStyle}
          onPress={props?.handleBackToHome}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{props?.message}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailedContainerStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(40),
  },
  messageText: {
    ...R.palette.StyleText(
      R.palette.FontSizes.Medium,
      R.fonts['Karla-Medium'],
      R.colors.darkGray,
    ),
  },
  txtEmpty: {
    paddingTop: moderateVerticalScale(15),
    ...R.palette.StyleText(
      R.palette.FontSizes.Medium,
      R.fonts['Karla-Medium'],
      R.colors.darkGray,
    ),
  },
  regularTxtStyle: R.palette.StyleText(
    R.palette.FontSizes.Medium,
    R.fonts['Karla-Regular'],
    R.colors.white,
  ),
});
