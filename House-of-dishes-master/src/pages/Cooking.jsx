import { useNavigate } from "react-router-dom";
import IngredientsSection from "../components/IngredientsSection/IngredientsSection";
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const Cooking = () => {
  const navigate = useNavigate();
  const playerRef = useRef(null);

  const handleNavigate = () => {
    navigate('');
  };

  const handleSkip = (seconds) => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + seconds);
  };

  return (
    <div className="h-full w-screen bg-[#0B1018]">
      <div className="text-center text-white text-4xl pt-8 font-bold">
        Welcome to AI Chef Kitchen
      </div>
      <div>
        <button
          onClick={handleNavigate}
          className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold ml-6"
        >
          Back
        </button>
      </div>
      <div className="flex items-center justify-center my-10">
        <ReactPlayer
          ref={playerRef}
          controls
          url='https://www.youtube.com/watch?v=Zb5jUa-J4VE'
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleSkip(-10)}
          className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold mx-2"
        >
          Skip Backward 10s
        </button>
        <button
          onClick={() => handleSkip(10)}
          className="text-white bg-indigo-600 py-1.5 px-4 rounded-lg font-bold mx-2"
        >
          Skip Forward 10s
        </button>
      </div>
      <div>
        <IngredientsSection />
      </div>
    </div>
  );
};

export default Cooking;
