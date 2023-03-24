import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Colors } from 'ui';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 20,
  padding: 0,
  borderRadius: 10,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === 'dark' ? Colors.PRIMARY : Colors.PRIMARY_LIGHT,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 12,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? Colors.SECONDARY : Colors.GRAPHITE,
    boxSizing: 'border-box',
  },
}));

export const ControlledSwitch = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <StyledSwitch
      defaultChecked
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'ant design' }}
    />
  );
};
