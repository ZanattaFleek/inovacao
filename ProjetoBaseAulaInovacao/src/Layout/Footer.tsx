import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { GlobalStateInterface } from '../States/GlobalState';

export default function FooterNavigation({ globalState }: { globalState: GlobalStateInterface }) {
  const [value, setValue] = React.useState(0);

  return (
    <>
      {!globalState.LoginState.logado ? '' :


        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <Box sx={{ width: '100%' }}>

            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
              <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
          </Box>
        </Paper>

      }
    </>
  );
}
