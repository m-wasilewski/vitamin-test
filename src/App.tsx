import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { DataSelectContext } from './components/DataSelect';
import { Header } from './components/Header';

export default () => {
  const [
    dataset,
    setDataset,
  ] = useState<string>('');

  return (
    <DataSelectContext.Provider value= {{ dataset, setDataset }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <p>Selected: {dataset || 'none'}</p>
        </Box>
      </Box>
    </DataSelectContext.Provider>
  );
}