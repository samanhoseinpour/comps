import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);

    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 realtive">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleSelect}
      >
        {value?.label || 'Selected...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
