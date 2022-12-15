import { createContext, useContext } from 'react';

type DatasetContextType = {
  dataset: string,
  setDataset: (value: string) => void,
};

export const DataSelectContext = createContext<DatasetContextType>(
  {
    dataset: '',
    setDataset: () => {},
  } as DatasetContextType
);

export const useDataSelect = () => useContext(DataSelectContext);