import { useState } from 'react'¨

import './App.css'
import CookieClicker from './components/CookieClicker/CookieClicker'
import CatFacts from './components/CatFact/CatFacts'
import Users from './components/Users/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CookieClicker onClick={}/>
      {/* <CatFacts /> --> One thing at the time, just adding for setup's sake*/}
      {/* <Users /> */}

    </>
  )
}

export default App
