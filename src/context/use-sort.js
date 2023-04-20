import { useState } from 'react';

const useSort = (tableData, tableConfig) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSoryBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSoryBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSoryBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSoryBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSoryBy(null);
    }
  };

  let sortedData = tableData;
  if (sortOrder && sortBy) {
    const { sortValue } = tableConfig.find((column) => column.label === sortBy);

    sortedData = [...tableData].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
};

export default useSort;
