import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>Hello from Tech net</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        increment by amount
      </button>
      <button onClick={() => dispatch(decrementByAmount(8))}>
        decrement by amount
      </button>
    </>
  );
}

export default App;
