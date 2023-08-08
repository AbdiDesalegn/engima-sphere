import React from 'react';
import { Box, Avatar, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, Settings } from '@mui/icons-material';

const UserProfileSidebar = ({ username, bio, profilePictureUrl }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <Avatar src={profilePictureUrl} alt={username} sx={{ width: 100, height: 100, my: 2 }} />
      <Typography variant="h6" gutterBottom>
        {username}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        {bio}
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        {/* Add other relevant options as ListItem components */}
      </List>
    </Box>
  );
};

export default UserProfileSidebar;
