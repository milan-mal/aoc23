import { useState } from 'react'
import './Day02.css'


function Day02() {
  const [inputData, setInputData] = useState('')
  const [outputData, setOutputData] = useState('')

  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }
  
  const stringSplit = (stringToSplit) => {
    const stringSplit = stringToSplit.split('\n')
    return stringSplit
  }
  
  const getOutput = (event) => {
    const getOutput = stringSplit(inputData)
    console.log('getOutput:', getOutput)
    setOutputData(getOutput)

    event.preventDefault()
  }

  return (
    <>
      <div>
        <form>
          <label htmlFor='dataIn' >Data input</label><br/>
          <textarea id='dataIn' name='dataIn' rows='10' cols='50' onChange={handleInputChange} value={inputData} /><br/><br/>
          <button onClick={getOutput} >Submit</button><br/><br/>
          <label htmlFor='dataOut' >Output</label><br/>
          <input type='text' id='dataOut' name='dataOut' value={outputData} disabled /><br/>
        </form>
      </div>
    </>
  )
}

export default Day02
