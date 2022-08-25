import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroup } from './input-group';
import { inputSchema } from '../utils/schema';

export function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(inputSchema)
  });

  const onSubmit = (data) => console.log('submitted:', data);

  console.log('rendered!');

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-7 p-10 flex flex-col gap-3 border rounded-md'
    >
      <InputGroup 
        label='Full name'
        register={register('fullName')}
        errMessage={errors.fullName?.message}
      />
      <InputGroup 
        label='Email'
        register={register('email')}
        errMessage={errors.email?.message}
      />
      <InputGroup 
        label='Age'
        register={register('age')}
        errMessage={errors.age?.message}
      />
      <InputGroup 
        label='Password'
        type='password'
        register={register('password')}
        errMessage={errors.password?.message}
      />
      <button type='submit' className='mt-5'>Register now!</button>
    </form>
  );
}
