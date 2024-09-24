"use client";

import { increment, incrementByAmount } from "@/store/features/grid";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const Grid = () => {
  const value = useAppSelector(state => state.grid.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(3));
  };

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
