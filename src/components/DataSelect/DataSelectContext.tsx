import {
  createContext,
  useContext,
} from 'react';

type DatasetContextType = {
  dataset: string,
  setDataset: (value: string) => void,
};

export const DataSelectContext = createContext<DatasetContextType>(
  {
    dataset: '',
    setDataset: () => {},
  }
);

export const useDataSelect = () => useContext(DataSelectContext);