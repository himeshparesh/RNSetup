import {useNavigation} from '@react-navigation/native';
import {colors} from '@root/theme/theme';
import {Constants} from '@root/utility/Constants';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../Header';

const ComingSoonComp = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Header
        // title={strings.text.editProfile}
        leftButtons={
          <TouchableOpacity
            activeOpacity={Constants.activeOpacity}
            onPress={() => navigation.goBack()}>
            {/* <BackHeaderIcon /> */}
          </TouchableOpacity>
        }
        useSeparator
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 30, color: colors.black}}>Coming Soon</Text>
      </View>
    </View>
  );
};

export default ComingSoonComp;
