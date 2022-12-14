import {
  Select,
  styled,
} from '@mui/material';

export const StyledSelect = styled(Select)(({ theme: { palette: { primary }} }) => ({
  color: primary.contrastText,
  background: primary.dark,
  '& .MuiSvgIcon-root': {
    color: primary.contrastText,
  },
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: primary.dark,
    },
    '&:hover fieldset':{
      borderColor: primary.dark,
    },
    '&.Mui-focused fieldset': {
      borderColor: primary.dark,
      borderWidth: 1,
    }
  }
}));