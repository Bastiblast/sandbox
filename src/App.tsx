import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiSelectorBtn from './MultiSelectorBtn'
import SomethingDisplayed from './SomethingDisplayed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-xl'>Free sandbox environnement.</div>
      <span className='text-accent'>Design what you imagine</span>
      <main>
        <MultiSelectorBtn />

        <SomethingDisplayed />

      </main>
    </>
  )
}

export default App
