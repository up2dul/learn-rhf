export function InputGroup({ label, type, placeholder, register, errMessage }) {
  return (
    <div className='form-control'>
      {type === 'checkbox'
        ? <div className='flex items-center gap-2'>
            <input
              type='checkbox'
              {...register}
            />
            <label className='label'>
              <span className='label-text'>{label}</span>
            </label>
          </div>
        : <>
            <label className='label'>
              <span className='label-text'>{label}</span>
            </label>
            <input
              type={type || 'text'}
              autoComplete='off'
              placeholder={placeholder}
              {...register}
            />
          </>
      }
      <p className='mt-1 text-red-500'>{errMessage}</p>
    </div>
  );
}
