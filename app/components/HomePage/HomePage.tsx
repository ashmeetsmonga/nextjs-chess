import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center px-10">
      <div className="w-full max-w-3/4 flex justify-center">
        <div className="relative">
          <Image src="/assets/images/chessboard.png" alt="chessboard" width={600} height={600} />
        </div>
        <div className="text-center w-1/2 flex flex-col justify-between items-center">
          <h1 className="w-3/4 text-6xl font-bold text-white capitalize ">Play chess online with friends</h1>
          <div className="flex flex-col w-1/2 gap-5">
            <button className="bg-primary text-white rounded px-10 py-4">
              <div className=" text-3xl font-bold">Create a room</div>
              <div className="text-sm font-semibold">Others can join to play or watch</div>
            </button>
            <button className="bg-secondaryLite text-gray-300 rounded px-10 py-4 text-3xl font-bold">
              <div className=" text-3xl font-bold">Join a room</div>
              <div className=" text-sm font-semibold">Join to play or spectate game</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
