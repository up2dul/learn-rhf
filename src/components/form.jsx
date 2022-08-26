import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroup } from './input-group';
import { inputSchema } from '../utils/schema';

let count = 0;

export function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(inputSchema)
  });

  const onSubmit = (data) => {
    console.log('submitted!');
    console.table(data);
  };

  console.log('rendered:', ++count);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-7 p-10 flex flex-col gap-3 border border-secondary rounded-md'
    >
      <InputGroup 
        label='Full name'
        placeholder='e.g. Thomas bujang'
        register={register('fullName')}
        errMessage={errors.fullName?.message}
      />
      <InputGroup 
        label='Email'
        placeholder='e.g. thomas@gmail.com'
        register={register('email')}
        errMessage={errors.email?.message}
      />
      <InputGroup 
        label='Age'
        placeholder='e.g. 30'
        register={register('age')}
        errMessage={errors.age?.message}
      />
      <InputGroup 
        label='Password'
        type='password'
        placeholder='****'
        register={register('password')}
        errMessage={errors.password?.message}
      />
      <InputGroup 
        label='Confirm Password'
        type='password'
        placeholder='****'
        register={register('confirmPassword')}
        errMessage={errors.confirmPassword?.message}
      />
      <InputGroup 
        label='Subscribe to our newsletter'
        type='checkbox'
        register={register('subscribe')}
        errMessage={errors.subscribe?.message}
      />
      <button 
        type='submit'
        className='mt-5 btn btn-primary'
      >
        Register now!
      </button>
    </form>
  );
}
