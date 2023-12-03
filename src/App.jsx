import { useState } from 'react'
import './App.css'

function App() {
  
  const splitLines = (event) => {
    const stringSplit = event.target.value.split('/n')
    console.log(stringSplit)
  }

  return (
    <>
      <div>
        <form>
          <label htmlFor='dataIn' >Data input</label><br/>
          <textarea type='text' id='dataIn' name='dataIn' rows='10' cols='50' onChange={splitLines} /><br/><br/>
          <button onClick={splitLines} >Submit</button><br/><br/>
          <label htmlFor='dataOut' >Output</label><br/>
          <input type='text' id='dataOut' name='dataOut' /><br/>
        </form>
      </div>
    </>
  )
}

export default App
