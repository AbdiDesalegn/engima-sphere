import React, { useState } from 'react';
import { Typography, TextField, Button, Box, FormControlLabel, Switch, Avatar, Grid } from '@mui/material';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [showEmail, setShowEmail] = useState(false); // Privacy setting for email visibility
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    const updatedProfile = {
      username,
      bio,
      email,
      showEmail,
      profilePictureUrl,
    };

    try {
      const response = await fetch('http://localhost:3000/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });

      if (!response.ok) {
        throw new Error('Error updating profile');
      }

      setSuccessMessage('Profile updated successfully');
      setError(null);
    } catch (err) {
      setError(err.message); // Set the error message
      setSuccessMessage('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
      <Typography variant="h5">User Profile</Typography>
      <form onSubmit={handleProfileUpdate}>
        <Grid container spacing={2}>
          {/* Profile Picture */}
          <Grid item xs={12} md={4}>
            <Avatar src={profilePictureUrl} sx={{ width: 150, height: 150, mx: 'auto', my: 2 }} />
          </Grid>

          {/* File Input for Profile Picture */}
          <Grid item xs={12} md={8}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </Grid>

          {/* Username */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* Bio */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bio"
              multiline
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>

          {/* Privacy setting for email visibility */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={showEmail}
                  onChange={() => setShowEmail(!showEmail)}
                  color="primary"
                />
              }
              label="Show Email to Others"
            />
          </Grid>

          {/* Error Message */}
          <Grid item xs={12}>
            {error && <Typography variant="body2" color="error">{error}</Typography>}
            {successMessage && <Typography variant="body2" color="success">{successMessage}</Typography>}
          </Grid>

          {/* Update Profile Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UserProfile;
