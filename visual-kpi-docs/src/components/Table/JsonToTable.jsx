import React, { useState, useMemo } from 'react';

const JsonToTable = ({ jsonData }) => {
  const [filter, setFilter] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [rowsToShow, setRowsToShow] = useState(jsonData.length);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering logic
  const filteredData = useMemo(() => {
    return jsonData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [jsonData, filter]);

  // Sorting logic
  const sortedData = useMemo(() => {
    if (sortColumn) {
      return [...filteredData].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
    }
    return filteredData;
  }, [filteredData, sortColumn, sortOrder]);

   // Pagination logic
   const totalPages = Math.ceil(sortedData.length / rowsToShow);
   const startIndex = (currentPage - 1) * rowsToShow;
   const endIndex = startIndex + rowsToShow;

  // Table rows
  const rows = sortedData.slice(startIndex, endIndex).map((row, index) => (
    <tr key={index}>
      {Object.values(row).map((value, colIndex) => (
        <td key={colIndex}>{value}</td>
      ))}
    </tr>
  ));

  // Table header for sorting
  const headers = Object.keys(jsonData[0]).map((key) => (
    <th key={key} onClick={() => handleSort(key)}>
      {key}
      {sortColumn === key && (
        <span>{sortOrder === 'asc' ? ' 🠽' : ' 🠿'}</span>
      )}
    </th>
  ));

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <label htmlFor="rowsToShow">
        Show
        <select 
          id="rowsToShow"
          value={rowsToShow}
          onChange={ (e) => setRowsToShow(Number(e.target.value)) }>
            <option value="100"></option>
          {[5, 10, 20, 25, 50, 100].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        Entries
      </label>
      <label htmlFor="filterInput">
        Search:
        <input
          id="filterInput"
          type="text"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
      <table>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <div>
        <span>
          Showing {startIndex + 1} to {Math.min(endIndex, sortedData.length)} of {sortedData.length} entries
        </span>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default JsonToTable;
