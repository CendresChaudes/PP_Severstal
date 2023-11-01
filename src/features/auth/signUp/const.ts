import { FormInstance } from 'antd';

export const ValidationRule = {
  Email: [
    {
      required: true,
      whitespace: true,
      message: 'Обязательное поле',
    },
    {
      type: 'email',
      message: 'Введите корректную электронную почту',
    },
  ],
  Password: [
    {
      required: true,
      whitespace: true,
      message: 'Обязательное поле',
    },
    {
      type: 'password',
    },
    {
      min: 8,
      message: 'Длина пароля не менее 8 символов',
    },
  ],
  PasswordConfirm: [
    ({ getFieldValue }: { getFieldValue: FormInstance['getFieldValue'] }) => ({
      validator(_: unknown, value: string) {
        if (getFieldValue('password') === value) {
          return Promise.resolve();
        }

        return Promise.reject(new Error('Пароли не совпадают'));
      },
    }),
  ],
};
