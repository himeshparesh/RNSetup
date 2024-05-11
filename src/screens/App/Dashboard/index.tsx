import {storeToken} from '@root/store/reducers/Login/LoginSlice';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(storeToken(''));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
