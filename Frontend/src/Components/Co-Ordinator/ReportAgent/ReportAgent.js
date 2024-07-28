// import React, { useState } from 'react';
// import './ReportAgent.css';

// const ReportAgent = () => {
//   const data = [
//     { date: '01/01/2024', agent: 10, reportTotal: 20 },
//     { date: '02/02/2024', agent: 35, reportTotal: 40 },
//     { date: '02/03/2024', agent: 50, reportTotal: 60 },
//     { date: '02/04/2025', agent: 47, reportTotal: 50 },
//     { date: '03/05/2026', agent: 10, reportTotal: 20 },
//     { date: '04/06/2027', agent: 35, reportTotal: 40 },
//     { date: '05/07/2028', agent: 50, reportTotal: 60 },
//     { date: '06/08/2028', agent: 47, reportTotal: 50 },
//     { date: '07/09/2028', agent: 10, reportTotal: 20 },
//     { date: '08/10/2028', agent: 35, reportTotal: 40 },
//     { date: '09/11/2028', agent: 50, reportTotal: 60 },
//     { date: '10/12/2028', agent: 47, reportTotal: 50 },
//     // Add more data objects as needed
//   ];

//   const [filterDay, setFilterDay] = useState('');
// const [filterMonth, setFilterMonth] = useState('');
// const [filterYear, setFilterYear] = useState('');

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPaginationControls = () => (
//     <div className="pagination-report-agent-controls mt-4">
//       <button
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//       >
//         Previous
//       </button>
//       <span>
//         Page {currentPage} of {totalPages}
//       </span>
//       <button
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//       >
//         Next
//       </button>
//     </div>
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className="d-flex reportagent-home">
//       <div className="reportagent-content mt-3">
//         <div className="d-flex justify-content-between mt-3">
//           <h2 className="mb-2">Report From Agent</h2>
//           <div className="filter-controls mt-3">
//   <div>
//     <label htmlFor="filter-day">Filter by Day:</label>
//     <select
//       id="filter-day"
//       value={filterDay}
//       onChange={(e) => setFilterDay(e.target.value)}
//     >
//       <option value="">All</option>
//       {[...new Set(data.map((item) => new Date(item.date).getDate()))].map(
//         (day) => (
//           <option key={day} value={day}>
//             {day}
//           </option>
//         )
//       )}
//     </select>
//   </div>

//   <div>
//     <label htmlFor="filter-month">Filter by Month:</label>
//     <select
//       id="filter-month"
//       value={filterMonth}
//       onChange={(e) => setFilterMonth(e.target.value)}
//     >
//       <option value="">All</option>
//       {[...new Set(data.map((item) => new Date(item.date).getMonth() + 1))].map(
//         (month) => (
//           <option key={month} value={month}>
//             {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
//           </option>
//         )
//       )}
//     </select>
//   </div>

//   <div>
//     <label htmlFor="filter-year">Filter by Year:</label>
//     <select
//       id="filter-year"
//       value={filterYear}
//       onChange={(e) => setFilterYear(e.target.value)}
//     >
//       <option value="">All</option>
//       {[...new Set(data.map((item) => new Date(item.date).getFullYear()))].map(
//         (year) => (
//           <option key={year} value={year}>
//             {year}
//           </option>
//         )
//       )}
//     </select>
//   </div>
// </div>
//         </div>
//         <table className="report-table">
//           <thead>
//             <tr>
//               <th>Report Date</th>
//               <th>Report From Agent</th>
//               <th>Report Total</th>
//             </tr>
//           </thead>
//           <tbody>
//   {data
//     .filter(
//       (item) =>
//         (filterDay === '' || new Date(item.date).getDate() === parseInt(filterDay)) &&
//         (filterMonth === '' || new Date(item.date).getMonth() + 1 === parseInt(filterMonth)) &&
//         (filterYear === '' || new Date(item.date).getFullYear() === parseInt(filterYear))
//     )
//     .map((row, index) => (
//       <React.Fragment key={index}>
//         <tr>
//           <td>{row.date}</td>
//           <td>{row.agent}</td>
//           <td>{row.reportTotal}</td>
//         </tr>
//         <tr className="total-row">
//           <td>Total Report</td>
//           <td>{row.agent}</td>
//           <td>{row.reportTotal}</td>
//         </tr>
//       </React.Fragment>
//     ))}
// </tbody>
//         </table>
//         {renderPaginationControls()}
//       </div>
//     </div>
//   );
// };

// export default ReportAgent;



import React, { useState } from 'react';
import './ReportAgent.css';

const ReportAgent = () => {
    const data = [
        { date: '01/01/2024', agent: 10, reportTotal: 20 },
        { date: '02/02/2024', agent: 35, reportTotal: 40 },
        { date: '02/03/2024', agent: 50, reportTotal: 60 },
        { date: '02/04/2025', agent: 47, reportTotal: 50 },
        { date: '03/05/2026', agent: 10, reportTotal: 20 },
        { date: '04/06/2027', agent: 35, reportTotal: 40 },
        { date: '05/07/2028', agent: 50, reportTotal: 60 },
        { date: '06/08/2028', agent: 47, reportTotal: 50 },
        { date: '07/09/2028', agent: 10, reportTotal: 20 },
        { date: '08/10/2028', agent: 35, reportTotal: 40 },
        { date: '09/11/2028', agent: 50, reportTotal: 60 },
        { date: '10/12/2028', agent: 47, reportTotal: 50 },
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
    <div className="pagination-report-agent-controls mt-4">
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
    const totalAgent = filteredData.reduce((acc, curr) => acc + curr.agent, 0);
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
    <div className="d-flex reportagent-home">
      <div className="reportagent-content mt-3">
        <div className="d-flex justify-content-between mt-3">
          <h2 className="mb-2">Report From Agent</h2>
        <div className="filter-reportagent-controls">
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
        <table className="reportagent-table">
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
                  <td>{row.agent}</td>
                  <td>{row.reportTotal}</td>
                </tr>
                {/* <tr className="total-reportagent-row">
                  <td>Total Report</td>
                  <td>{row.agent}</td>
                  <td>{row.reportTotal}</td>
                </tr> */}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <h3 className="mt-4">Total Summary</h3>
        <table className="reportagent-table">
          <thead>
            <tr>
              <th></th>
              <th>Total Agent</th>
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

export default ReportAgent;