import {colors} from '@root/theme/theme';
import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

function SafeArea({
  topColor = colors.white,
  bottomColor = colors.white,
  statusBarColor = colors.white,
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
