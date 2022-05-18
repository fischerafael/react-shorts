import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../../src/app/slices/counterSlice";
import { RootState } from "../../../src/app/store";

export const useCounterRedux = (incrementBy: number) => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementBy));
  };

  return {
    handleIncrement,
    handleDecrement,
    handleIncrementByAmount,
    counter,
  };
};
