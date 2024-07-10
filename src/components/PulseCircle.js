import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const PulseCircle = styled(Box)({
  width: '12px',
  height: '12px',
  backgroundColor: 'red',
  borderRadius: '50%',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    animation: 'pulse 1s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'translate(-50%, -50%) scale(1)',
      opacity: 1,
    },
    '100%': {
      transform: 'translate(-50%, -50%) scale(2.5)',
      opacity: 0,
    },
  },
});

export default PulseCircle;
