import { useState } from 'react';
import {
  Box,
  CssBaseline,
  Toolbar
} from '@mui/material';
import { DataSelectContext } from './components/DataSelect';
import { Header } from './components/Header';
import { StockCharts } from './components/StockCharts';

export default () => {
  const [
    dataset,
    setDataset,
  ] = useState<string>('');

  return (
    <DataSelectContext.Provider value={{ dataset, setDataset }}>
      <CssBaseline />
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <StockCharts />
      </Box>
    </DataSelectContext.Provider>
  );
}