import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import ulito from '../../assets/UlitoStickerPrueba.jpeg';

export default function ShowUloFade() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: 250,
        width: 250,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Fade in={checked}>
        <Box
          component="img"
          src={ulito}
          alt="Ulito"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            boxShadow: 3,
            mt: 2,
          }}
        />
      </Fade>
    </Box>
  );
}
