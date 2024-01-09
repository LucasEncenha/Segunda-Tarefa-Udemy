import { useState } from 'react'
//components
import FirstComponents from './components/FirtsComponents'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'
//styles
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponents />
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </>
  )
}

export default App
