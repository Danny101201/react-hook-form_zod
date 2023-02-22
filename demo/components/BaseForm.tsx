import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import Input from './Input'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Schema = yup.object({
  example: yup.string().required(),
  exampleRequired: yup.string().required(),
})
function BaseForm() {
  const { register, setValue, handleSubmit, watch, formState: { errors }, control } = useForm<Inputs>({
    defaultValues: {
      example: 'example',
      exampleRequired: 'BaseForm.tsx'
    },
    resolver: yupResolver(Schema),
    reValidateMode: 'onBlur'
  });
  const OnSubmit: SubmitHandler<Inputs> = data => console.log(data)
  const example = watch('example')

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <Input label='name' register={register} required />

      <input type="text"  {...register("example")} />
      <p>{example}</p>
      <input type="text"
        {...register("exampleRequired",
          {
            required: true,
            minLength: {
              value: 4,
              message: "最少四個字元"
            },
            // valueAsNumber: true,
            shouldUnregister: true
          })} />
      <p>{errors.exampleRequired?.message}</p>
      <select {...register("gender")} >
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <button onClick={() => {
        setValue('gender', '' as GenderEnum)

      }}>set gendervalue</button>
      <button type="submit">submit</button>

    </form>
  )
}

export default BaseForm
