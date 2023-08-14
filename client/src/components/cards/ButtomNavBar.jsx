import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home, Explore, Person, Notifications } from '@mui/icons-material';

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, width: '100%' }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Explore" icon={<Explore />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
        <BottomNavigationAction label="Notifications" icon={<Notifications />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavBar;
