export interface RawCropData {
  Country: string;
  Year: string;
  "Crop Name": string;
  "Crop Production (UOM:t(Tonnes))": string | number | null;
  "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": string | number | null;
  "Area Under Cultivation (UOM:Ha(Hectares))": string | number | null;
}

export interface CropData {
  year: number;
  crop: string;
  production: number;
  yield: number;
  area: number;
}
