import { useState } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Registro de Usuario</h1>
      <Form />
    </>
  )
}

export default App
