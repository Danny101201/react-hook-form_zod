import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Inputs = {
  name: string;
  age: string;
  checkBox: boolean;
};
const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
}).required();
function Yup() {
  const [show, setShow] = useState<boolean>(true)
  const { unregister, register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  })
  // register('name132')
  let ckeckOut = watch('checkBox')
  const Onsubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  const handleCleanInput = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setShow(false)
    unregister(e.currentTarget.name as any, {
      keepDefaultValue: true
    })
  }
  console.log(errors)
  return (
    <>
      <form onSubmit={handleSubmit(Onsubmit)}>
        <p>ckeckOut: {new Boolean(ckeckOut).toString()}</p>
        {ckeckOut && <input type="text" {...register('name')} />}
        <input type="text" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
        <p>checkBox</p>
        <input type="checkBox" {...register('checkBox')} />
        <button type='submit'>click</button>
      </form>
      <hr />
      <button name="name" onClick={handleCleanInput}>clean text input</button>
    </>
  )
}

export default Yup