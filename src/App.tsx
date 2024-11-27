import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiSelectorBtn from './MultiSelectorBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-xl'>Free sandbox environnement.</div>
      <span className='text-accent'>Design what you imagine</span>
      <main>
        <MultiSelectorBtn />

        <div>
          <span>Hello</span>
          <span>il est 09:00</span>
        </div>

        <div>
          <span>Notre rendez vous</span>
          <span>prévu pour 12:45</span>
        </div>

      </main>
    </>
  )
}

export default App
