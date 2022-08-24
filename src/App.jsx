import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <main className='my-20 mx-auto w-4/5 md:w-3/5 lg:w-2/5'>
      <h1 className="text-3xl text-center">Registration form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-7 p-10 flex flex-col gap-3 border rounded-md'
      >
        <div>
          <label htmlFor="full-name" className='label'>Full name</label>
          <input 
            type='text'
            id='full-name' 
            className='input input-bordered w-full' 
            {...register('fullName', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="email" className='label'>Email</label>
          <input 
            type='email'
            id='email' 
            className='input input-bordered w-full' 
            {...register('email', { required: true })}
          />
        </div>
        <div>
          <label htmlFor="age" className='label'>Age</label>
          <input 
            type='number'
            id='age' 
            className='input input-bordered w-full' 
            {...register('age', { required: true, min: 18, max: 40 })}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-5'>Register now!</button>
      </form>
    </main>
  );
}

export default App;
