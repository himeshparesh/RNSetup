import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from './colors';
import {R} from '.';
import {U} from '@root/utility';

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
  flex1Bg: {flex: 1, backgroundColor: R.colors.white, paddingTop: 35},
  centerViewAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    ...R.palette.StyleText(
      R.palette.FontSizes.Small,
      R.fonts['Karla-Regular'],
      R.colors.gray,
    ),
  },
  dividerView: {borderBottomWidth: 0.5, borderBottomColor: R.colors.grayD3D4D5},
  dividerViewThik: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: R.colors.grayD3D4D5,
  },
  txtStrikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  dashedStyle: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: R.colors.grayD3D4D5,
  },
  centerAlignStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  bold20TextStyle: {
    fontSize: 20,
    color: R.colors.black,
  },
  bold16TextStyle: {
    fontSize: 16,
    color: R.colors.black
  },
});
