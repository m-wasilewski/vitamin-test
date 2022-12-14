export type columnNamesType = {
  [key: string]: number
};

export type axisType = {
  x: Date,
  y: Array<number> | number,
}

export type pointsType = Array<axisType>;

export type dataType = {
  dataPoints: pointsType,
  volumePoints: pointsType,
  closePoints: pointsType,
  title: string,
  oldestAvailableData: string | null,
  newestAvailableData: string | null,
  isLoaded: boolean,
}