"use client";

import useGrid from "@/store/features/grid";

const Grid = () => {
  const { handleIncrement, handleIncrementByAmount, value } = useGrid();

  return (
    <div>
      <h1>Grid</h1>
      <p>{value}</p>
      <button onClick={handleIncrement}>increment</button>
      <br />
      <button onClick={handleIncrementByAmount}>incrementByAmount</button>
    </div>
  );
};

export default Grid;
