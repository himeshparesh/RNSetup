import React, {Fragment} from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {R} from '@root/res';

function SafeArea({
  topColor = R.colors.white,
  bottomColor = R.colors.white,
  statusBarColor = R.colors.white,
  ...props
}) {
  const styles = StyleSheet.create({
    topSafeArea: {
      flex: 0,
      backgroundColor: topColor,
    },
    bottomSafeArea: {
      flex: 1,
    },
  });

  if (props.children) {
    return (
      <Fragment>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.bottomSafeArea}>
          <StatusBar barStyle="dark-content" backgroundColor={statusBarColor} />
          {props.children}
        </SafeAreaView>
      </Fragment>
    );
  } else {
    return (
      <View>
        <SafeAreaView style={styles.topSafeArea} />
        <SafeAreaView style={styles.bottomSafeArea}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={statusBarColor}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default SafeArea;
