import { CropData, RawCropData } from '../types/AgricultureData';
import rawData from '../data/agricultureData.json';

const parseData = (data: RawCropData[]): CropData[] => {
  return data.map(item => {
    const yearMatch = item.Year.match(/\d+/);
    return {
      year: yearMatch ? parseInt(yearMatch[0], 10) : 0,
      crop: item["Crop Name"],
      production: item["Crop Production (UOM:t(Tonnes))"]
        ? parseFloat(item["Crop Production (UOM:t(Tonnes))"].toString())
        : 0,
      yield: item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]
        ? parseFloat(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"].toString())
        : 0,
      area: item["Area Under Cultivation (UOM:Ha(Hectares))"]
        ? parseFloat(item["Area Under Cultivation (UOM:Ha(Hectares))"].toString())
        : 0,
    };
  });
};

const parsedData = parseData(rawData as RawCropData[]);

export const processData = (data: CropData[]) => {

  const maxProduction = data.reduce((acc, cur) => {
    const yearData = acc[cur.year] || { year: cur.year, maxCrop: cur.crop, minCrop: cur.crop, maxProd: cur.production, minProd: cur.production };
    if (cur.production > yearData.maxProd) {
      yearData.maxCrop = cur.crop;
      yearData.maxProd = cur.production;
    }
    if (cur.production < yearData.minProd) {
      yearData.minCrop = cur.crop;
      yearData.minProd = cur.production;
    }
    acc[cur.year] = yearData;
    return acc;
  }, {} as Record<number, { year: number; maxCrop: string; minCrop: string; maxProd: number; minProd: number }>);

  const maxProductionArray = Object.values(maxProduction);

  const cropStats = data.reduce((acc, cur) => {
    const cropData = acc[cur.crop] || { crop: cur.crop, totalYield: 0, totalArea: 0, count: 0 };
    cropData.totalYield += cur.yield;
    cropData.totalArea += cur.area;
    cropData.count += 1;
    acc[cur.crop] = cropData;
    return acc;
  }, {} as Record<string, { crop: string; totalYield: number; totalArea: number; count: number }>);

  const avgYieldArea = Object.values(cropStats).map(cropData => ({
    crop: cropData.crop,
    avgYield: parseFloat((cropData.totalYield / cropData.count).toFixed(3)),
    avgArea: parseFloat((cropData.totalArea / cropData.count).toFixed(3)),
  }));

  return { maxProduction: maxProductionArray, avgYieldArea };
};

export default parsedData;
