export function InputGroup({ label, type, register, errMessage }) {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input type={type || 'text'} {...register} />
      <p className='mt-1 text-red-500'>{errMessage}</p>
    </div>
  );
}
