export type ColumnNamesType = {
  [key: string]: number
};

export type AxisType = {
  x: Date,
  y: Array<number> | number,
}

export type PointsType = Array<AxisType>;

export type DataType = {
  dataPoints: PointsType,
  volumePoints: PointsType,
  closePoints: PointsType,
  title: string,
  oldestAvailableData: string | null,
  newestAvailableData: string | null,
  isLoaded: boolean,
}

export type DatasetDataItem = Array<string | number>;

export type DatasetRespond = {
  column_names: Array<string>,
  data: Array<DatasetDataItem>,
  name: string,
  oldest_available_date: Date,
  newest_available_date: Date,
}
