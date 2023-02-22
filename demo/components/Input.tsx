import React, { useState } from 'react'
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
interface InputProps<T> {
  label: Path<T>,
  register: UseFormRegister<T>,
  required: boolean
}


function Input<T>({ label, register, required }: InputProps<T>) {

  type keyType = 'obj1' | 'obj2' | 'obj3'
  let objArray = {
    obj1: '',
    obj2: '',
    obj3: '',
  }
  const [customerObjArray, setCustomerObjArray] =
    useState<{ [key in keyType]: string }>(objArray)

  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  )
}

export default Input