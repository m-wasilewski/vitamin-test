import { DataType } from "./components/StockCharts/StockCharts.types";

export const NASDAQ_API_KEY = process.env.REACT_APP_NASDAQ_API_KEY;

export const DATABASE = [
  'AAP',
  'FB',
  'TSLA',
  'HP',
];

export const initialDataObject: DataType = {
  dataPoints: [],
  volumePoints: [],
  closePoints: [],
  title: '',
  oldestAvailableData: null,
  newestAvailableData: null,
  isLoaded: false,
};