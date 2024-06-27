import React from "react";
import "../styles.css";

interface AvgYieldAreaProps {
  data: { crop: string; avgYield: number; avgArea: number }[];
}

const AvgYieldAreaTable: React.FC<AvgYieldAreaProps> = ({ data }) => {
  return (
    <div className="table-container">
      <h2 className="table-heading">Average Yield and Cultivation Area</h2>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Crop</th>
            <th>Average Yield of the Crop between 1950-2020</th>
            <th>Average Cultivation Area of the Crop between 1950-2020</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">{row.crop}</td>
              <td className="table-cell">{row.avgYield}</td>
              <td className="table-cell">{row.avgArea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvgYieldAreaTable;
