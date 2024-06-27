import React, { useEffect, useState } from 'react';
import MaxMinProductionTable from './components/MaxMinProductionTable';
import AvgYieldAreaTable from './components/AvgYieldAreaTable';
import { processData } from './utils/dataProcessor';
import parsedData from './utils/dataProcessor';

interface MaxMinProduction {
  year: number;
  maxCrop: string;
  minCrop: string;
}

interface AvgYieldArea {
  crop: string;
  avgYield: number;
  avgArea: number;
}

const App: React.FC = () => {
  const [maxMinProduction, setMaxMinProduction] = useState<MaxMinProduction[]>([]);
  const [avgYieldArea, setAvgYieldArea] = useState<AvgYieldArea[]>([]);

  useEffect(() => {
    const { maxProduction, avgYieldArea } = processData(parsedData);
    setMaxMinProduction(maxProduction);
    setAvgYieldArea(avgYieldArea);
  }, []);

  return (
    <div>
      <h1>Agriculture Data Analysis</h1>
      <h2>Max and Min Production by Year</h2>
      <MaxMinProductionTable data={maxMinProduction} />
      <h2>Average Yield and Cultivation Area</h2>
      <AvgYieldAreaTable data={avgYieldArea} />
    </div>
  );
};

export default App;
