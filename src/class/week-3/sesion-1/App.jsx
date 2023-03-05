import React, { useState, useEffect } from 'react'
import EjemploKeys from './extra/EjemploKeys'
import ConKeyIndex from './extra/ConKeyIndex'
import ConProperKey from './extra/ConProperKey'
import SinKeys from './extra/SinKeys'
import { shuffle } from './extra/shuffle'

// const items = [
//   { id: "a", value: "Apple" },
//   { id: "b", value: "Banana" },
//   { id: "c", value: "Carrot" },
//   { id: "d", value: "Dewberry" }
// ]

const App = () => {
  const [items, setItems] = useState([
    { id: "a", value: "Apple" },
    { id: "b", value: "Banana" },
    { id: "c", value: "Carrot" },
    { id: "d", value: "Dewberry" }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(shuffle(items))
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <EjemploKeys items={items} />
      <SinKeys items={items} />
      <ConKeyIndex items={items} />
      <ConProperKey items={items} />
    </div>
  )
}

export default App