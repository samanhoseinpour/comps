import { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div className="flex gap-4">
        <Button success onClick={incrementCounter}>
          Increment
        </Button>
        <Button danger onClick={decrementCounter}>
          Decrement
        </Button>
      </div>
      <div className="mt-10">
        <span>{counter}</span>
      </div>
      <div className="flex gap-10 mt-10">
        <input className="border border-blue-700" type="numer" />
        <Button primary>Add it!</Button>
      </div>
    </div>
  );
};

export default Counter;
