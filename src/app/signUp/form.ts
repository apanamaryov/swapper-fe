import * as yup from 'yup';

export type SignUpFormInputs = {
  email: string,
  password: string,
  password2: string,
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
  password2: 'password2',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  birthDay: 'birthDay',
  country: 'country',
  city: 'city',
  deliveryAddress: 'deliveryAddress',
  phone: 'phone',
}

export const validationSchema = yup.object().shape({
  [FORM_FIELDS.email]: yup.string().trim().required('This field is required').email(),
  [FORM_FIELDS.password]: yup.string().trim().required('This field is required'),
  [FORM_FIELDS.password2]: yup.string().trim().required('This field is required')
    .test('password-is-same', 'Invalid password', function (password2) { return this.parent.password === password2 }),
});