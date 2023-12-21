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
    const inputArray = stringSplit(inputData)

    let gameSum = 0
    let totalPower = 0
    
    inputArray.forEach(element => {
      const game = element.slice(element.search(':') + 2)
        .split(/,|;/)
        .map(x => x.trim().split(' ').reverse())  // reverse can be removed (impacts for loop)
      const gameId = + (element.slice(element.search(' '), element.search(':')))

      console.log('Game', Number(gameId), game)

      // Part One
      const redLimit = 12
      const greenLimit = 13
      const blueLimit = 14
      let gamePossible = true

      for( let i = 0; i < game.length; i++){
        if( game[i][0] === 'red' && game[i][1] > redLimit ){
          gamePossible = false
          break
        }
        if( game[i][0] === 'green' && game[i][1] > greenLimit ){
          gamePossible = false
          break
        }
        if( game[i][0] === 'blue' && game[i][1] > blueLimit ){
          gamePossible = false
          break
        }
      }
      console.log('Game possible:', Number(gameId), gamePossible)
      if( gamePossible ) gameSum += gameId


      // Part Two
      var redMax = 0
      var greenMax = 0
      var blueMax = 0
      for( let i = 0; i < game.length; i++){
        if( game[i][0] === 'red' && +game[i][1] > redMax ){
          redMax = +game[i][1]
        }
        if( game[i][0] === 'green' && +game[i][1] > greenMax ){
          greenMax = +game[i][1]
        }
        if( game[i][0] === 'blue' && +game[i][1] > blueMax ){
          blueMax = +game[i][1]
        }
      }
      const gamePower = redMax * greenMax * blueMax
      console.log('gamePower:', gamePower)
      totalPower += gamePower

    })

    console.log('gameSum:', gameSum)
    console.log('totalPower:', totalPower)

    setOutputData(gameSum)

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
