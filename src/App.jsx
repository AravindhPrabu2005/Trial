import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[name, setName] = useState('john');
  const[age, setAge] = useState(0)

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <button onClick={() => setName('jane')}>Name</button>
        <button onClick={() => setAge( age+1 )}>Age</button>
      </div>
    </>
  )
}

export default App
