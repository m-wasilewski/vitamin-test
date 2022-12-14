 import {
  FC,
  useEffect,
  useMemo,
  useState,
} from 'react';
 import CanvasJSReact from './canvasjs.stock.react';
 var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
 
import { useDataSelect } from '../DataSelect/DataSelectContext';
import { CenterWrapper, ChartContainer } from './StockCharts.styles';
import { dataType } from './StockCharts.types';
import { CircularProgress } from '@mui/material';
import { NASDAQ_API_KEY } from '../../constants';
import { getChartOptions, parseData } from './StockCharts.helpers';

const initialDataObject = {
  dataPoints: [],
  volumePoints: [],
  closePoints: [],
  title: '',
  oldestAvailableData: null,
  newestAvailableData: null,
  isLoaded: false,
};

export const StockCharts:FC = () => {
  const { dataset } = useDataSelect();

  const [
    data,
    setData
  ] = useState<dataType>(initialDataObject);

  useEffect(() => {
    if (dataset) {
      setData(initialDataObject);

      fetch(`https://data.nasdaq.com/api/v3/datasets/WIKI/${dataset}.json?api_key=${NASDAQ_API_KEY}`)
        .then(res => res.json())
        .then(
          ({ dataset }) => {
            const {
              dataPoints,
              volumePoints,
              closePoints,
            } = parseData(dataset);
            
            setData({
              isLoaded: true,
              title: dataset.name,
              dataPoints,
              volumePoints,
              closePoints,
              oldestAvailableData: dataset.oldest_available_date,
              newestAvailableData: dataset.newest_available_date,
            });
          },
        )
    }
  }, [dataset]);
 
  const options = useMemo(() => getChartOptions(data), [data]);

  return (
    <ChartContainer>
      {dataset && (
        data.isLoaded
          ? <CanvasJSStockChart options={options} />
          : (
            <CenterWrapper>
              <CircularProgress />
            </CenterWrapper>
          )
      )}
      {!dataset && (
        <CenterWrapper>
          Please select database
        </CenterWrapper>
      )}
    </ChartContainer>
  );
}