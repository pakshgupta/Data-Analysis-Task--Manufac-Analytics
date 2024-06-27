import React from 'react';
import '../styles.css';

interface MaxMinProductionProps {
  data: { year: number; maxCrop: string; minCrop: string }[];
}

const MaxMinProductionTable: React.FC<MaxMinProductionProps> = ({ data }) => {
  return (
    <div className="table-container">
      <h2 className="table-heading">Max and Min Production by Year</h2>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Year</th>
            <th>Crop with Maximum
            Production in that Year</th>
            <th>Crop with Minimum
            Production in that Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">{row.year}</td>
              <td className="table-cell">{row.maxCrop}</td>
              <td className="table-cell">{row.minCrop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaxMinProductionTable;
