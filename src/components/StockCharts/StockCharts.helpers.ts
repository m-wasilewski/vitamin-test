import camelCase from 'camelcase';

import {
  columnNamesType,
  dataType,
} from "./StockCharts.types";

export const parseData = (dataset: any) => {
  const columnNames: columnNamesType = {}; 
  
  dataset.column_names.forEach((name: string, index: number) => {
    columnNames[camelCase(name)] = index;
  });

  const getData = (index: number, key: string) => dataset.data[index][columnNames[key]];

  const dataPoints = [];
  const volumePoints = []
  const closePoints = [];

  for (let i = 0; i < dataset.data.length; i++) {
    dataPoints.push({
      x: new Date(getData(i, 'date')),
      y: [
        Number(getData(i, 'open')),
        Number(getData(i, 'high')),
        Number(getData(i, 'low')),
        Number(getData(i, 'close')),
      ],
    });
    volumePoints.push({
      x: new Date(getData(i, 'date')),
      y: Number(getData(i, 'volume')),
    });
    closePoints.push({
      x: new Date(getData(i, 'date')),
      y: Number(getData(i, 'close')),
    });
  }

  return {
    dataPoints,
    volumePoints,
    closePoints,
  }
}

export const getChartOptions = (dataset: any) => ({
  theme: 'light2',
  subtitles: [{
    text: dataset.title,
  }],
  charts: [{
    axisX: {
      lineThickness: 5,
      tickLength: 0,
      labelFormatter: (event: any) => {
        return '';
      },
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
        labelFormatter: (event: any) => {
          return '';
        }
      }
    },
    axisY: {
      title: 'Price',
      prefix: '$',
      tickLength: 0
    },
    toolTip: {
      shared: true
    },
    data: [{
      name: 'Price (in USD)',
      yValueFormatString: '$#,###.##',
      type: 'candlestick',
      dataPoints : dataset.dataPoints
    }]
  },{
    height: 100,
    axisX: {
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisY: {
      title: 'Volume',
      prefix: '$',
      tickLength: 0
    },
    toolTip: {
      shared: true
    },
    data: [{
      name: 'Volume',
      yValueFormatString: '$#,###.##',
      type: 'column',
      dataPoints : dataset.volumePoints
    }]
  }],
  navigator: {
    data: [{
      dataPoints: dataset.closePoints
    }],
    slider: {
      minimum: new Date(dataset.oldestAvailableData!),
      maximum: new Date(dataset.newestAvailableData!)
    }
  }
});
