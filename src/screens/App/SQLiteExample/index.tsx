import React from 'react';
import {View} from 'react-native';
import useSQLiteLogic from './useSQLiteLogic';
import {moderateScale} from 'react-native-size-matters';
import CustomButton from '@root/components/CustomButton';
import {useTranslation} from 'react-i18next';

const SQLiteExample = () => {
  const {t} = useTranslation();
  const {
    handleOpenDatabase,
    handleCreateNewTable,
    getTableNames,
    handleInsertData,
    handleGetUsers,
    handleUpdateFirstUser,
    handleDeleteSecondUser,
  } = useSQLiteLogic();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(18),
      }}>
      <CustomButton
        title={t('buttonTitle.createDatabase')}
        style={{marginTop: 20}}
        onPress={handleOpenDatabase}
      />
      <CustomButton
        title={t('buttonTitle.createNewTable')}
        style={{marginTop: 20}}
        onPress={handleCreateNewTable}
      />
      <CustomButton
        title={t('buttonTitle.getTablesName')}
        style={{marginTop: 20}}
        onPress={getTableNames}
      />
      <CustomButton
        title={t('buttonTitle.insertDetails')}
        style={{marginTop: 20}}
        onPress={handleInsertData}
      />
      <CustomButton
        title={t('buttonTitle.getUserData')}
        style={{marginTop: 20}}
        onPress={handleGetUsers}
      />
      <CustomButton
        title={t('buttonTitle.updateFirstUser')}
        style={{marginTop: 20}}
        onPress={handleUpdateFirstUser}
      />
      <CustomButton
        title={t('buttonTitle.deleteSecondUser')}
        style={{marginTop: 20}}
        onPress={handleDeleteSecondUser}
      />
    </View>
  );
};

export default SQLiteExample;
