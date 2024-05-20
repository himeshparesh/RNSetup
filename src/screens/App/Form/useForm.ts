import {ToastType} from '@root/types/types';
import {Utils} from '@root/utils';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

export const useForm = () => {
  const {t} = useTranslation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const onChangeName = (text: string) => {
    setName(text);
  };
  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const validate = () => {
    if (name == '') {
      Utils.Utility.showMessage(
        ToastType.error,
        t('validationErrors.pleaseEnterName'),
      );
      return false;
    } else if (email == '') {
      Utils.Utility.showMessage(
        ToastType.error,
        t('validationErrors.pleaseEnterEmailAdress'),
      );
      return false;
    } else if (!Utils.Utility.isValidEmail(email)) {
      Utils.Utility.showMessage(
        ToastType.error,
        t('validationErrors.pleaseEnterValidEmailAddress'),
      );
      return false;
    }

    return true;
  };

  const onSubmitClick = () => {
    if (validate()) {
      Utils.Utility.showMessage(ToastType.info, t('text.done'));
      setEmail('');
      setName('');
    }
  };

  return {onChangeName, onChangeEmail, name, email, onSubmitClick};
};
