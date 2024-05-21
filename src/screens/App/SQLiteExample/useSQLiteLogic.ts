import {ToastType} from '@root/types/types';
import {showMessage} from '@root/utils/Utility';
import {useEffect} from 'react';
import {Alert} from 'react-native';
import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
import {
  createNewTable,
  deleteUser,
  getTablesList,
  insertNewData,
  updateUserData,
} from './dbQueries';

const useSQLiteLogic = () => {
  useEffect(() => {
    enablePromise(true);
  }, []);

  const handleOpenDatabase = () => {
    return openDatabase(
      {name: 'RNSetup.db', location: 'default'},
      () => {},
      error => {
        console.error(error);
        throw Error('Could not connect to database');
      },
    );
  };

  const handleCreateNewTable = async () => {
    const db = await handleOpenDatabase();
    const userPreferencesQuery = createNewTable;

    try {
      await db.executeSql(userPreferencesQuery);
    } catch (error) {
      console.error(error);
      throw Error(`Failed to create tables`);
    }
  };

  const getTableNames = async (): Promise<string[]> => {
    try {
      const db = await handleOpenDatabase();
      const tableNames: string[] = [];
      const results = await db.executeSql(getTablesList);
      results?.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          tableNames.push(result.rows.item(index).name);
        }
      });
      const tablesArr = tableNames.map((table, index) => {
        return `${index + 1}. ${table}`;
      });
      console.log(tablesArr);
      Alert.alert('Tables', tablesArr.toString());
      return tableNames;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get table names from database');
    }
  };

  const handleInsertData = async () => {
    const db = await handleOpenDatabase();
    const insertQuery = insertNewData;
    const values = ['Adam', 25];
    try {
      db.executeSql(insertQuery, values)
        .then(response => {
          console.log('RESPONSE', response);
        })
        .catch(error => console.log('CATCH', error));
    } catch (error) {
      console.error(error);
      throw Error('Failed to add user');
    }
  };

  const handleGetUsers = async () => {
    try {
      const db = await handleOpenDatabase();
      const users: any = [];
      const results = await db.executeSql('SELECT * FROM User');
      results?.forEach(result => {
        for (let index = 0; index < result.rows.length; index++) {
          users.push(result.rows.item(index));
        }
      });
      const userArr = users.map(user => {
        return `${JSON.stringify(user)}`;
      });
      console.log(userArr);
      Alert.alert('Tables', userArr.toString());
      return users;
    } catch (error) {
      console.error(error);
      throw Error('Failed to get users from database');
    }
  };

  const handleUpdateFirstUser = async () => {
    const db = await handleOpenDatabase();
    const updateQuery = updateUserData;
    const values = ['Johny', 30, 1];
    try {
      db.executeSql(updateQuery, values);
      showMessage(ToastType.success, 'User updated!');
    } catch (error) {
      console.error(error);
      throw Error('Failed to update user');
    }
  };

  const handleDeleteSecondUser = async () => {
    const db = await handleOpenDatabase();
    const deleteQuery = deleteUser;
    const values = [2];
    try {
      db.executeSql(deleteQuery, values)
        .then(response => {
          console.log(response);
          showMessage(ToastType.success, 'User deleted!');
        })
        .catch(error => {
          console.log('error', error);
        });
    } catch (error) {
      console.error(error);
      throw Error('Failed to remove user');
    }
  };

  return {
    handleOpenDatabase,
    handleCreateNewTable,
    getTableNames,
    handleInsertData,
    handleGetUsers,
    handleUpdateFirstUser,
    handleDeleteSecondUser,
  };
};

export default useSQLiteLogic;
