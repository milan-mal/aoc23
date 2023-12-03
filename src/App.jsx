import { useState } from 'react'
import './App.css'

function App() {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }
  
  const stringSplit = () => {
    const stringSplit = inputData.split('\n')
    console.log('stringSplit:', stringSplit)
    return stringSplit
  }

  const getCalibrationValues = (stringArray) => {
    stringArray.forEach((element) => {
      console.log(element)
      
    })
  }
  
  const getCalibrationValueSum = (event) => {
    stringSplit()
    event.preventDefault()
  }

  return (
    <>
      <div>
        <form>
          <label htmlFor='dataIn' >Data input</label><br/>
          <textarea id='dataIn' name='dataIn' rows='10' cols='50' onChange={handleInputChange} value={inputData} /><br/><br/>
          <button onClick={getCalibrationValueSum} >Submit</button><br/><br/>
          <label htmlFor='dataOut' >Output</label><br/>
          <input type='text' id='dataOut' name='dataOut' /><br/>
        </form>
      </div>
    </>
  )
}

export default App
