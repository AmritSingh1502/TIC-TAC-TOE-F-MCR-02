import { useState } from "react";
import Board from "./Board";

export default function TicTacToe({ size = 3 }){
    const [board,setBoard] = useState(Array.from({length:size},()=>{
        return Array(size).fill(null);
    }));

    const handleClick = (rowIdx,colIdx) =>{
        console.log(rowIdx,colIdx);
        const deepCopyOfBoard = JSON.parse(JSON.stringify(board));
        deepCopyOfBoard[rowIdx][colIdx] ="X";
        console.log(deepCopyOfBoard);
        setBoard(deepCopyOfBoard);
        
    }
    return (
        <div className="container">
            <Board handleClick={handleClick} board = {board} size={size}/>
            <div className="status">Status</div>
            <button>Reset</button>
        </div>
    )
}