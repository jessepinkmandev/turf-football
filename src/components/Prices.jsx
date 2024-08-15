import { useState } from "react";

export default function Prices() {
  const [players, setPlayers] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePlayerChange = (e) => {
    setPlayers(e.target.value);
  };

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const amount = (+players + +hours) * 300;

  return (
    <div className="mt-12 ">
      <h2 className="text-4xl md:text-6xl text-center mb-10  text-red-700">
        Pricing Details:
      </h2>

      <form onSubmit={handleSubmit} className=" ">
        <div className="text-2xl text-red-700 grid grid-rows-2 my-4 gap-4 max-w-[60%] md:max-w-[40%] m-auto">
          <label>Number of Players:</label>
          <input
            className=" border-2"
            type="number"
            name="player"
            placeholder="Number of Players"
            value={players}
            onChange={handlePlayerChange}
          />
        </div>

        <div className="text-2xl text-red-700 grid grid-rows-2 gap-4 max-w-[60%] md:max-w-[40%] m-auto">
          <label>Hours:</label>
          <input
            className=" border-2"
            type="number"
            name="hours"
            value={hours}
            placeholder="Number of Hours"
            onChange={handleHoursChange}
          />
        </div>
      </form>

      {hours && players !== 0 ? (
        <div className="mt-12 text-4xl text-red-700 text-center">
          Your total Amount is {amount} ₹
        </div>
      ) : null}
    </div>
  );
}
