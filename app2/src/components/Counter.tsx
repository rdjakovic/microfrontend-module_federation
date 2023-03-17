import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount(count + 1);
  const onDecrement = () => setCount(count - 1);
  return (
    <div>
      <h3 className="text-blue-700">Counter App</h3>
      <p>
        Current count: <strong className="text-lg">{count}</strong>
      </p>
      <div className="flex justify-between p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl"
          onClick={onDecrement}
        >
          -
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-2xl"
          onClick={onIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
