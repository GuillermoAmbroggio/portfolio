import React, { useState } from 'react';
import {
  ContainerForm,
  LeftInput,
  RightInput,
  ContainerButton,
  ContainerToast,
} from './formcontact.style';
import { RowResponsive } from '../../../templates/Layouts.style';
import Writing from '../../../../copywriting/Writing';
import { Button } from '../../../atoms/button/button.style';
import emailjs from 'emailjs-com';
import Input from '../../../atoms/input/Input';
import TextArea from '../../../atoms/input/TextArea';
import { useFormik } from 'formik';
import validateInput from './validateInput';
import Toast from '../../../molecules/toast/Toast';
import { Spinner } from '../../../utils/loadingPage/Spinner';

const CONTACT_SERVICE_ID = process.env.CONTACT_SERVICE_ID;
const CONTACT_TEMPLATE_ID = process.env.CONTACT_TEMPLATE_ID;
const CONTACT_USER_ID = process.env.CONTACT_USER_ID;

export interface inputForm {
  user_name: string;
  user_email: string;
  user_subject: string;
  message: string;
}

const FormContact: React.FC = () => {
  const texts = Writing();
  const [statusEmail, setStatusEmail] = useState<
    'isLoading' | 'success' | 'error' | undefined
  >(undefined);
  const { values, setFieldValue, handleSubmit, errors } = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_subject: '',
      message: '',
    },
    onSubmit: (values) => {
      setStatusEmail('isLoading');
      if (CONTACT_SERVICE_ID && CONTACT_TEMPLATE_ID && CONTACT_USER_ID) {
        emailjs
          .send(
            CONTACT_SERVICE_ID,
            CONTACT_TEMPLATE_ID,
            values,
            CONTACT_USER_ID
          )
          .then(
            () => {
              setStatusEmail('success');
            },
            () => {
              setStatusEmail('error');
            }
          );
      }
    },
    validationSchema: validateInput(texts),
    validateOnChange: false,
  });

  return (
    <div style={{ minHeight: 200 }}>
      {!statusEmail ? (
        <ContainerForm onSubmit={handleSubmit}>
          <RowResponsive>
            <LeftInput>
              <Input
                type='text'
                placeholder={texts.contact.form.name}
                value={values.user_name}
                onChange={(e) => setFieldValue('user_name', e.target.value)}
                name='user_name'
                status={errors.user_name ? 'error' : undefined}
                messagge={errors.user_name}
              />
            </LeftInput>
            <RightInput>
              <Input
                type='text'
                placeholder={texts.contact.form.email}
                value={values.user_email}
                onChange={(e) => setFieldValue('user_email', e.target.value)}
                name='user_email'
                status={errors.user_email ? 'error' : undefined}
                messagge={errors.user_email}
              />
            </RightInput>
          </RowResponsive>
          <Input
            containerStyle={{ marginBottom: 20 }}
            type='text'
            placeholder={texts.contact.form.subject}
            value={values.user_subject}
            onChange={(e) => setFieldValue('user_subject', e.target.value)}
            name='user_subject'
            status={errors.user_subject ? 'error' : undefined}
            messagge={errors.user_subject}
          />
          <TextArea
            placeholder={texts.contact.form.message}
            name='message'
            value={values.message}
            onChange={(e) => setFieldValue('message', e.target.value)}
            status={errors.message ? 'error' : undefined}
            messagge={errors.message}
          />
          <ContainerButton>
            <Button status='primary' type='submit'>
              {texts.contact.form.send}
            </Button>
          </ContainerButton>
        </ContainerForm>
      ) : (
        <ContainerToast>
          {statusEmail === 'isLoading' ? (
            <div>
              <Spinner size='70px' />
            </div>
          ) : (
            <Toast
              status={statusEmail === 'success' ? 'success' : 'error'}
              message={
                statusEmail === 'success'
                  ? texts.contact.form.successMessage
                  : texts.contact.form.errorMessage
              }
            />
          )}
        </ContainerToast>
      )}
    </div>
  );
};

export default FormContact;
