import React from 'react'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from './Input';

type ObjectType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function ControlForm() {
  const { handleSubmit, control, reset } = useForm<Input2s>()
  const [value, setValue] = React.useState('')
  const [number, setNumber] = React.useState<ObjectType>({ userId: 1, id: 1, title: '123', body: '123' })

  const vakuses = React.useMemo<number>(() => 123, [])
  const onSubmit: SubmitHandler<Input2s> = async (data) => {
    await reset({
      "example": "reset"
    })
    setValue(data.example)
  }
  return (
    <div>
      {value}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="example"
          control={control}
          rules={{ required: true, minLength: { value: 4, message: "Please enter a valid" } }}
          render={({ field }) => <input className="bg-red-100" {...field} />}
        />
        {/* <button onClick={reset}>reset</button> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ControlForm