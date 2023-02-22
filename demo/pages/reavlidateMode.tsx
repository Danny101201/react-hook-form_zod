

import React from 'react';
import { useForm, ValidationMode } from 'react-hook-form';

type ReValidateMode = 'onBlur' | 'onChange' | 'onSubmit' | undefined;

const ReavlidateMode: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    firstName: string;
    lastName: string;
  }>({
    mode: 'onChange',
    reValidateMode: 'onChange'
    // mode: mode as keyof ValidationMode,
    // reValidateMode: reValidateMode as keyof ReValidateMode,
  });
  const onSubmit = () => { };

  console.log(errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', { required: 'firstName request' })}
        placeholder="firstName"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <input
        {...register('lastName', { required: true, maxLength: 5 })}
        placeholder="lastName"
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <button id="submit">Submit</button>
    </form>
  );
};

export default ReavlidateMode;