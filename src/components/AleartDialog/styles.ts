import { ScaledSheet, moderateScale } from "react-native-size-matters";

const styles = ScaledSheet.create({
    sadFaceIconStyle: {
      height: moderateScale(45),
      width: moderateScale(45),
    },
    btnStyle: {
      flex: 1,
      height: moderateScale(50),
      marginBottom: moderateScale(12),
      marginTop: moderateScale(8),
      marginHorizontal: moderateScale(10),
      paddingHorizontal: moderateScale(5),
      paddingVertical: moderateScale(15),
    },
    messageStyle: { marginVertical: moderateScale(12), textAlign: "center" },
    centerStyle: {
      alignSelf: "center",
      borderRadius: moderateScale(20),
      width: "80%",
    },
  });
  
  export default styles;