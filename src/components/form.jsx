import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroup } from './input-group';
import { inputSchema } from '../utils/schema';
import { inputList } from '../utils/input-list';

let count = 0;

export function Form() {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(inputSchema),
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log('submitted!');
    console.table(data);
    reset();
  }

  const onError = (errors) => console.table(errors);

  console.log('rendered:', ++count);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className='mt-7 p-10 flex flex-col gap-3 border border-secondary rounded-md'
    >
      {
        inputList.map(({ name, ...props }) => (
          <InputGroup
            {...props}
            register={register(name)}
            errMessage={errors[name]?.message}
          />
        ))
      }
      <button
        type='submit'
        disabled={!isValid}
        className='mt-5 btn btn-primary'
      >
        Register now!
      </button>
    </form>
  );
}
