import SortableTable from '../components/SortableTable';

const TablePage = () => {
  const tableData = [
    { name: 'Orange', color: 'bg-orange-500', score: 12 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 6 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
    { name: 'Cherry', color: 'bg-red-500', score: 2.5 },
  ];

  const tableConfig = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`} />,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: 'Score Squared',
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <SortableTable
      tableData={tableData}
      tableConfig={tableConfig}
      keyFn={keyFn}
    />
  );
};

export default TablePage;
