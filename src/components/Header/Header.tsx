import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header:FC = () => (
  <AppBar component="nav">
    <Toolbar>
      <Typography
        variant="h6"
        component="h1"
      >
        NASDAQ Chart
      </Typography>
    </Toolbar>
  </AppBar>
);