import {CustomInput} from '@root/components/CustomInput';
import Layout from '@root/components/Layout';
import React from 'react';
import {styles} from './style';
import {useForm} from './useForm';
import CustomButton from '@root/components/CustomButton';
import {useTranslation} from 'react-i18next';

export const Form: React.FC = () => {
  const {t} = useTranslation();
  const {onChangeName, onChangeEmail, name, email, onSubmitClick} = useForm();

  return (
    <Layout style={styles.container}>
      <CustomInput
        title={t('label.name')}
        value={name}
        placeholder={t('placeholder.enterName')}
        onChangeText={onChangeName}
        mainStyle={styles.input}
      />
      <CustomInput
        title={t('label.emailAddress')}
        value={email}
        placeholder={t('placeholder.enterEmail')}
        onChangeText={onChangeEmail}
        mainStyle={[styles.input, styles.inputEmail]}
      />

      <CustomButton onPress={onSubmitClick} title={t('buttonTitle.submit')} />
    </Layout>
  );
};
