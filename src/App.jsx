import { useState } from 'react'
import './App.css'
import Day01 from './components/Day01'
import Day02 from './components/Day02'

function App() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0)

  const components = {
    1: Day01,
    2: Day02,
  }

  const CurrentDay = components[currentDayIndex + 1]

  const handleChangeDay = (newDayIndex) => {
    setCurrentDayIndex(newDayIndex)
  }

  return (
    <>
      <div className='pagination' >
        {Array.from({ length: Object.keys(components).length }, ( _, i ) => (
          <span key={i + 1}>
            <a
              key={`pageNumber${i + 1}`}
              href='#'
              onClick={() => handleChangeDay(i)}
            >
              { i + 1 }
            </a><span key={`pageSeparator${i + 1}`}>, </span>
          </span>
        ))}
      </div>
      <h2>Day {currentDayIndex + 1}</h2>
      <CurrentDay />
    </>
  )
}

export default App
