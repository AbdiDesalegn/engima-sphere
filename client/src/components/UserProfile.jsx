import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Add code to update user profile on the server
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Typography variant="h5">User Profile</Typography>
      <form onSubmit={handleProfileUpdate}>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Bio"
          multiline
          rows={4}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Update Profile
        </Button>
      </form>
    </Box>
  );
};

export default UserProfile;
