import { produce } from 'immer';
import { useReducer } from 'react';
import Button from './Button';
import Panel from './Panel';

const INCREMENT_COUNT = 'increment_count';
const DECREMENT_COUNT = 'decrement_count';
const CHANGE_VALUE = 'change_value';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.counter += 1;
      return;

    case DECREMENT_COUNT:
      state.counter -= 1;
      return;

    case CHANGE_VALUE:
      state.valueToAdd = action.payload;
      return;

    case ADD_VALUE_TO_COUNT:
      state.counter += state.valueToAdd;
      state.valueToAdd = 0;
      return;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(produce(reducer), {
    counter: 0,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel>
      <h1 className="mb-4">Current count: {state.counter}</h1>
      <div className="flex flex-row gap-4">
        <Button success onClick={increment}>
          Increment
        </Button>
        <Button danger onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form className="flex gap-10 mt-10" onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-500"
          type="number"
        />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
};

export default Counter;
