import React, { useState } from 'react'
import { Control, useController, UseControllerProps } from 'react-hook-form'
import { FormValues, OptionVALUESType, VALUES } from './FormWithZod'

type ControlledSelectProps = UseControllerProps<FormValues> &
{
  label: string;
  options: string[]
};
export function Checkboxes({ control, name, label, rules, options }: ControlledSelectProps) {
  const { field, formState } = useController<FormValues>({
    control,
    name,
    rules
  })
  return (
    <>
      <p>{label}</p>
      <select {...field} onChange={e => {
        field.onChange(e.target.value)
      }}>
        {options.map((option, index) => (
          <option value={option} key={index}>{option}</option>
        ))}
      </select>
      {formState.errors.type && <p>{formState.errors.type?.message}</p>}
    </>
  )
}

