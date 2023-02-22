import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FormWithZod } from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormWithZod />
    </div>
  )
}

export default App
