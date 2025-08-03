import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarraNav from './componentes/barra-nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BarraNav />
    </div>
  )
}

export default App
