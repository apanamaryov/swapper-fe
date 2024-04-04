import * as yup from 'yup';

export type SignInFormInputs = {
  email: string,
  password: string,
  /*firstName: string,
  middleName: string,
  lastName: string,
  birthDay: Date,
  country: string,
  city: string,
  deliveryAddress: string,
  phone: string,*/
}

export const FORM_FIELDS = {
  email: 'email',
  password: 'password',
}

export const validationSchema = yup.object().shape({
  [FORM_FIELDS.email]: yup.string().trim().required('This field is required').email(),
  [FORM_FIELDS.password]: yup.string().trim().required('This field is required'),
});