import {colors} from '@root/theme/theme';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {Resource} from '.';

export default ScaledSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rootContainerBgGrey: {
    flex: 1,
    backgroundColor: colors.appBg,
  },
  flex1: {flex: 1},
  mainBodyContainer: {
    flex: 1,
    backgroundColor: colors.appBg,
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(12),
  },
  mainFormContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: moderateScale(20),
  },
  flexGrow: {
    flexGrow: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
  },
  rowCenterSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnPassword: {position: 'absolute', right: 38, bottom: 138},
  viewAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  flex1Bg: {flex: 1, backgroundColor: colors.white, paddingTop: 35},
  centerViewAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    ...Resource.palette.StyleText(
      Resource.palette.FontSizes.Small,
      Resource.fonts['Karla-Regular'],
      colors.gray,
    ),
  },
  dividerView: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.grayD3D4D5,
  },
  dividerViewThik: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.grayD3D4D5,
  },
  txtStrikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  dashedStyle: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.grayD3D4D5,
  },
  centerAlignStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold20TextStyle: {
    fontSize: 20,
    color: colors.black,
  },
  bold16TextStyle: {
    fontSize: 16,
    color: colors.black,
  },
});
