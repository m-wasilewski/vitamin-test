import { FC } from 'react';
import {
  FormControl,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useDataSelect } from './DataSelectContext';
import { StyledSelect } from './DataSelect.styles';

const PRICES = [
  'AAP',
  'FB',
  'TSLA',
  'HP',
]

export const DataSelect: FC = () => {
  const {
    dataset,
    setDataset,
  } = useDataSelect();
  
  return (
    <FormControl
      fullWidth
      size="small"
    >
      <StyledSelect
        displayEmpty
        onChange={(event: SelectChangeEvent<unknown>) => {
          setDataset(event.target.value as string);
        }}
        value={dataset}
      >
        <MenuItem disabled value=''>Select Database</MenuItem>
        {PRICES.map((value) => (
          <MenuItem
            key={value}
            value={value}
          >
            {value}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
}

