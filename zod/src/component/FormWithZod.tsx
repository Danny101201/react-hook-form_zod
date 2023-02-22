import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { Checkboxes } from './Checkboxes';

export const VALUES = ["Salmon", "Tuna", "Trout"] as const;
export type OptionVALUESType = typeof VALUES[number]

const UserSchema = z.object({
  name: z.string().min(2, '名字最少兩個字元'),
  email: z.string().email(),
  phone: z.string().refine((value) => value.includes('09'), {
    message: '請輸入正確手機格式'
  }),
  type: z.enum(VALUES)
})
export type FormValues = z.infer<typeof UserSchema>
export function FormWithZod() {
  const { control, handleSubmit, formState: { errors }, register } = useForm<FormValues>({
    resolver: zodResolver(UserSchema),
    reValidateMode: 'onChange'
  })
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>

          <label htmlFor="">name</label>
          <input {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">email</label>
          <input {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">phone</label>
          <input {...register('phone')} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <Checkboxes
          control={control}
          name='type'
          label='label'
          options={VALUES as unknown as string[]}
        />
        <input type="submit" />
      </form>
    </>
  )
}

