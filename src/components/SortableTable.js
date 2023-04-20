import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../context/use-sort';
import Table from './Table';

const SortableTable = (props) => {
  const { tableConfig, tableData } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    tableData,
    tableConfig
  );

  const tableConfigUpdate = tableConfig.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table
        {...props}
        tableData={sortedData}
        tableConfig={tableConfigUpdate}
      />
    </div>
  );
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
};

export default SortableTable;
