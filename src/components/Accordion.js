import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div
        onClick={() => {
          expandedIndex === index
            ? setExpandedIndex(-1)
            : setExpandedIndex(index);
        }}
        key={item.id}
      >
        <div className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer">
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
