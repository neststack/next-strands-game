import { increment, incrementByAmount } from "@/store/features/grid/grid-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const useGrid = () => {
  const value = useAppSelector(state => state.grid.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(3));
  };

  return {
    handleIncrement,
    handleIncrementByAmount,
    value
  };
};

export default useGrid;
