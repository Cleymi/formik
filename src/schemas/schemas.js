import * as yup from 'yup';

export const schemaForm = yup.object().shape({
  name: yup.string().required('Campo requerido'),
  lastname: yup.string().required('Campo requerido'),
  phone: yup
    .number()
    .typeError('Los valores deben ser números')
    .integer('Valor deber ser entero')
    .positive('Número deber ser positivo')
    .min(100000000, 'Mínimo 9 números')
    .max(999999999, 'Máximo 9 números')
    .required('Campo requerido'),
  email: yup.string().email('Por favor ingresar correo').required('Campo requerido'),
  password: yup.string().min(5).required('Campo requerido'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null, 'Las contraseñas deben ser iguales'])
    .required('Campo requerido'),
});
