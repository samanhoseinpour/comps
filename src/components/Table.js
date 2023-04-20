import { Fragment } from 'react';

const Table = ({ tableData, tableConfig, keyFn }) => {
  const renderedHeaders = tableConfig.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th key={column.label}>{column.label}</th>;
  });

  const renderedFruits = tableData.map((rowData) => {
    const renderedCells = tableConfig.map((cells) => {
      return (
        <td className="p-2" key={cells.label}>
          {cells.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedFruits}</tbody>
    </table>
  );
};

export default Table;
