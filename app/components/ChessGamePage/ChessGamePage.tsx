"use client";
import { Chess } from "chess.js";
import React, { useMemo, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Piece, Square } from "react-chessboard/dist/chessboard/types";

const ChessGamePage = () => {
  const game = useMemo(() => new Chess(), []);
  const [gamePosition, setGamePosition] = useState(game.fen());

  const onDrop = (sourceSquare: Square, targetSquare: Square, piece: Piece) => {
    let move;
    try {
      move = game.move({ from: sourceSquare, to: targetSquare, promotion: piece[1].toLowerCase() ?? "q" });
    } catch (e: any) {}
    setGamePosition(game.fen());

    if (move === null) return false;
    if (game.isGameOver() || game.isDraw()) return false;
    return true;
  };
  return (
    <div className="w-3/4 aspect-square max-w-[800px]">
      <Chessboard id="BasicBoard" onPieceDrop={onDrop} position={gamePosition} customDarkSquareStyle={{ backgroundColor: "#779952" }} />
    </div>
  );
};

export default ChessGamePage;
