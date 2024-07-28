import React, { useState } from 'react';
import './ReportPatient.css';

const ReportPatient = () => {
    const data = [
        { date: '01/15/2024', patient: 100, reportTotal: 250 },
        { date: '02/16/2024', patient: 700, reportTotal: 4050 },
        { date: '02/03/2024', patient: 500, reportTotal: 680 },
        { date: '02/04/2025', patient: 457, reportTotal: 505 },
        { date: '03/05/2026', patient: 130, reportTotal: 208 },
        { date: '04/21/2027', patient: 355, reportTotal: 405 },
        { date: '05/22/2028', patient: 560, reportTotal: 606 },
        { date: '06/027/2028', patient: 747, reportTotal: 506 },
        { date: '07/30/2028', patient: 150, reportTotal: 200 },
        { date: '08/10/2028', patient: 353, reportTotal: 450 },
        { date: '09/11/2028', patient: 520, reportTotal: 660 },
        { date: '10/12/2028', patient: 427, reportTotal: 550 },
        // Add more data objects as needed
      ];

  const [filterDay, setFilterDay] = useState('');
  const [filterMonth, setFilterMonth] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data.filter(
    (item) =>
      (filterDay === '' || new Date(item.date).getDate() === parseInt(filterDay)) &&
      (filterMonth === '' || new Date(item.date).getMonth() + 1 === parseInt(filterMonth)) &&
      (filterYear === '' || new Date(item.date).getFullYear() === parseInt(filterYear))
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationControls = () => (
    <div className="pagination-report-patient-controls mt-4">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const getTotalSummary = () => {
    const totalAgent = filteredData.reduce((acc, curr) => acc + curr.patient, 0);
    const totalReport = filteredData.reduce((acc, curr) => acc + curr.reportTotal, 0);
    return (
      <tr>
        <td>Total Report</td>
        <td>{totalAgent}</td>
        <td>{totalReport}</td>
      </tr>
    );
  };

  return (
    <div className="d-flex reportpatient-home">
      <div className="reportpatient-content mt-3">
        <div className="d-flex justify-content-between mt-3">
          <h2 className="mb-2">Report From Patient</h2>
        <div className="filter-reportpatient-controls">
          {/* <div>
            <label htmlFor="filter-day">Filter by Day : .</label>
            <select id="filter-day" value={filterDay} onChange={(e) => setFilterDay(e.target.value)}>
              <option value="">All</option>
              {[...new Set(data.map((item) => new Date(item.date).getDate()))].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div> */}

          <div>
            <label htmlFor="filter-month">Filter by Month : .</label>
            <select id="filter-month" value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)}>
              <option value="">All</option>
              {[...new Set(data.map((item) => new Date(item.date).getMonth() + 1))].map((month) => (
                <option key={month} value={month}>
                  {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="filter-year">Filter by Year : .</label>
            <select id="filter-year" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
              <option value="">All</option>
              {[...new Set(data.map((item) => new Date(item.date).getFullYear()))].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>
        <table className="reportpatient-table">
          <thead>
            <tr>
              <th>Report Date</th>
              <th>Report From Agent</th>
              <th>Report Total</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => (
              <React.Fragment key={index}>
                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#ffffff' }}>
                  <td>{row.date}</td>
                  <td>{row.patient}</td>
                  <td>{row.reportTotal}</td>
                </tr>
                {/* <tr className="total-reportagent-row">
                  <td>Total Report</td>
                  <td>{filteredData.reduce((acc, curr) => acc + curr.agent, 0)}</td>
                  <td>{filteredData.reduce((acc, curr) => acc + curr.reportTotal, 0)}</td>
                </tr> */}
                {/* <tr className="total-reportpatient-row">
                  <td>Total Report</td>
                  <td>{row.patient}</td>
                  <td>{row.reportTotal}</td>
                </tr> */}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <h3 className="mt-4">Total Summary</h3>
        <table className="reportpatient-table">
          <thead>
            <tr>
              <th></th>
              <th>Total Patient</th>
              <th>Total Report</th>
            </tr>
          </thead>
          <tbody>{getTotalSummary()}</tbody>
        </table>
        {renderPaginationControls()}
      </div>
    </div>
  );
};

export default ReportPatient;