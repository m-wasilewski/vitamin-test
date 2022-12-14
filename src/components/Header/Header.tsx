import { FC } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
 } from '@mui/material';
import { DataSelect } from '../DataSelect';

export const Header:FC = () => (
  <AppBar component="nav">
    <Toolbar>
      <Typography
        variant="h6"
        component="h1"
        sx={{
          flex: 1,
        }}
      >
        NASDAQ Chart
      </Typography>
      <Box
        sx={{
          flex: 1,
        }}
      >
        <DataSelect />
      </Box>
    </Toolbar>
  </AppBar>
);