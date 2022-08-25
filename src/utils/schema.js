import * as yup from 'yup';

export const inputSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(18).required()
}).required();
