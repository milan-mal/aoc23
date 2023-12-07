import { useState } from 'react'
import './App.css'


function App() {
  const [inputData, setInputData] = useState('')
  const [outputData, setOutputData] = useState('')

  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }
  
  const stringSplit = () => {
    const stringSplit = inputData.split('\n')
    return stringSplit
  }
  
  const convertToNumber = (stringToConvert) => {
    const numbersText = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ]
    
    let stringConverted = stringToConvert
    numbersText.forEach((numberText, index) => {
      stringConverted = stringConverted.replace(numberText, index)
    })

    return stringConverted
  }

  const getCalibrationValues = (stringArray) => {
    let calibrationValues = []
    stringArray.forEach((element) => {
      let number = ''
      for( let i = 0; i < element.length; i++ ){
        if( !isNaN(+element[i]) ){
          number += element[i]
          break
        }
      }
      if (number !== ''){
        const elementReversed = element.split('').reverse().join('')
        for( let i = 0; i < elementReversed.length; i++ ){
          if( !isNaN(+elementReversed[i]) ){
            number += elementReversed[i]
            break
          }
        }
      }
      if( number !== '' ) calibrationValues.push(+number)
    })
    console.log('calibrationValues', calibrationValues)
    return calibrationValues
  }
  
  const getCalibrationValueSum = (event) => {
    const calibrationValueSum = getCalibrationValues(stringSplit())
        .reduce((total, num) => total + num, 0)
    console.log(calibrationValueSum)
    setOutputData(calibrationValueSum)
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
          <input type='text' id='dataOut' name='dataOut' value={outputData} disabled /><br/>
        </form>
      </div>
    </>
  )
}

export default App
