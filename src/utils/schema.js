import * as Yup from 'yup';

export const inputSchema = Yup.object({
  fullName: Yup.string()
    .required('Enter your Full name!'),
  email: Yup.string()
    .email('Please enter a valid Email address!')
    .required('Enter your Email!'),
  age: Yup.number()
    .required('Enter your Age!')
    .positive()
    .integer(),
  password: Yup.string()
    .min(4, 'Min. 4 characters')
    .max(18, 'Max. 18 characters')
    .required('Enter your Password!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match!')
    .required('Retype the password!'),
  subscribe: Yup.boolean()
    .default(false)
}).required();
