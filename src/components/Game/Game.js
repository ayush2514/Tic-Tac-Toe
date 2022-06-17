import React ,{useState} from 'react';

import './Game.css';
import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import { calculateWinner } from '../../utils/WinnerCalculator';


export const Game= ()=>{
  const [cellValues, setCellValues] = useState(['','','','','','','','','']);
  const [xIsNext, setXIsNext] = useState(true);
  const [isGameOver,setIsGameOver] = useState(false);
  const [numberOfTurnsLeft, setNumerOfTurnsLeft] = useState(9);
  const [winningCombination,setWinningCombination] =useState([]);
  const [winner,setWinner] =useState();

  const restartGame = () =>{
  
    setCellValues(['','','','','','','','','']);
    setXIsNext(true);
    setIsGameOver(false);
    setNumerOfTurnsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
  }
  const isCellEmpty =(cellIndex) => cellValues[cellIndex]=='';
  const oncellClicked =(cellIndex) => {
    if(isCellEmpty(cellIndex)) {
    const newCellValues = [...cellValues];
    newCellValues[cellIndex] = xIsNext ? 'X':'0';

    //Counting the number of turns
    const newNumberOfTurnsLeft = numberOfTurnsLeft-1;

    // Calculate the result 
    const calcResult = calculateWinner(newCellValues,newNumberOfTurnsLeft, cellIndex);
    
    setCellValues(newCellValues);
    setXIsNext(!xIsNext);
    setIsGameOver(calcResult.hasResult);
    setNumerOfTurnsLeft(newNumberOfTurnsLeft);
    setWinner(calcResult.winner);
    setWinningCombination(calcResult.winningCombination);
    }
};
return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board 
            cellValues={cellValues}
            winningCombination={winningCombination}
            cellClicked={oncellClicked}/>
      </div>
      <ResultModal 
      isGameOver={isGameOver} 
      winner={winner} 
      onNewGameClicked={restartGame}/>
    </>
  );
}


