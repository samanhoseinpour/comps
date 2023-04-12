import { useState } from 'react';
import Dropdown from './components/Dropdown';

const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'I want mild', value: 'mild' },
    { label: `I'd like spicy`, value: 'spicy' },
    { label: 'Give me extra spicy', value: 'extra_spicy' },
  ];

  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
};

export default App;
