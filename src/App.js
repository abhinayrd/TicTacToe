import './App.css';
import { useState,useEffect } from 'react';



function App() {
  return (
    <div className = "center-div">
      <Board></Board>
    </div>
  );
}


function Board() {
  const [marks,setMarks] = useState([0,0,0,0,0,0,0,0,0]);
  const [player,setPlayer] = useState(1);
  const [gameOver,setGameOver] = useState(false);
  const [winner,setWinner] = useState(null);
  const [count,setCount] = useState(0);

  useEffect(()=>{

  },[winner])
  useEffect(()=>{
      const combinations = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
      ]

      for(let c of combinations){
          if(marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1){
              console.log('Player 1 wins')
              setWinner("Player 1")
              setGameOver(true)
          }
          if(marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2){
              console.log('Player 2 wins')
              setWinner("Player 2")
              setGameOver(true)
          }
      }
      if(count === 9 && !gameOver) window.location.reload();

  },[marks])
  const changeMark = (i)=>{
      const m = [...marks];
      if(m[i] === 0 && !gameOver){
          m[i] = player;
          setMarks(m);
          setPlayer(player === 1 ? 2 : 1);
          setCount(count + 1)
      }
      else if(!gameOver){
          alert('Please click on empty blocks');
      }
  }
return (
  <div className = "Board">
    {gameOver && <Status winner = {winner}/>}
    <div>
      <Block mark = {marks[0]} position = {0} changeMark={changeMark}></Block>
      <Block mark = {marks[1]} position = {1} changeMark={changeMark}></Block>
      <Block mark = {marks[2]} position = {2} changeMark={changeMark}></Block>
    </div>
    <div>
      <Block mark = {marks[3]} position = {3} changeMark={changeMark}></Block>
      <Block mark = {marks[4]} position = {4} changeMark={changeMark}></Block>
      <Block mark = {marks[5]} position = {5} changeMark={changeMark}></Block>
    </div>
    <div>
      <Block mark = {marks[6]} position = {6} changeMark={changeMark}></Block>
      <Block mark = {marks[7]} position = {7} changeMark={changeMark}></Block>
      <Block mark = {marks[8]} position = {8} changeMark={changeMark}></Block>
    </div>
  </div>
)
}


function Block({mark,position,changeMark}) {
  return (
    <div className = {`Block mark${mark}`} 
        onClick = {e=>changeMark(position)}>
      
    </div>
  )
}

function Status({winner}){
  return(
    <div>
      <h2>{winner} wins!</h2>
      <button onClick = {handleClick} style={{ fontSize: "20px", padding: "10px" }} > New Game</button>
    </div>
  )
}


async function handleClick(){
  await window.location.reload();
}

export default App;
