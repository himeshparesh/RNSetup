import {useNavigation} from '@react-navigation/native';
import {loginThunk} from '@root/store/ThunkActions';
import {storeToken} from '@root/store/reducers/LoginSlice';
import {useDispatch} from 'react-redux';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLoginClick = () => {
    let body = {
      username: 'kminchelle',
      password: '0lelplR',
    };
    const data = {body, isToken: false};
    dispatch(loginThunk(data))
      .unwrap()
      .then((data: any) => {
        if (data) {
          dispatch(storeToken('12345'));
        }
      });
  };

  return {onLoginClick};
};
