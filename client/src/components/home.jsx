import React from 'react';
import '../css/Home.css'; // Import the custom CSS file for styling
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ImageIcon from "@mui/icons-material/Image";
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import PrimarySearchAppBar from './PrimarySearchAppBar';

function Home() {
  return (
    <div>
      <AppBar position="static">
      <PrimarySearchAppBar />
      </AppBar>

      {/* Main Content */}
      <Container mt={4}>
        <Grid container spacing={4}>
          {/* Left Sidebar */}
          <Grid item md={3}>
            <Card>
              <CardContent>
                <Avatar src="https://via.placeholder.com/150" alt="Profile Picture" sx={{ width: 150, height: 150, mb: 3 }} />
                <Typography variant="h6">User Name</Typography>
                <Typography variant="body1">User Bio</Typography>
              </CardContent>
            </Card>

            <Card mt={4}>
              <CardContent>
                <Typography variant="h6">Trending Posts</Typography>
                {/* Add trending posts here */}
                <ul>
                  <li>
                    <Link href="#">Trending Post 1</Link>
                  </li>
                  <li>
                    <Link href="#">Trending Post 2</Link>
                  </li>
                  {/* Add more trending posts */}
                </ul>
              </CardContent>
            </Card>

            {/* Add other sections to the left sidebar as needed */}
          </Grid>

          {/* Main Feed */}
          <Grid item md={6}>
            {/* Post Creation Form */}
            <Card>
              <CardContent>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="What's on your mind?"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <ImageIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary">
                  Post
                </Button>
              </CardActions>
            </Card>

            {/* Post Cards */}
            <Card mt={4}>
              <CardContent>
                <Grid container alignItems="center">
                  <Grid item>
                    <Avatar src="https://via.placeholder.com/150" alt="Profile Picture" sx={{ width: 30, height: 30, mr: 2 }} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">User Name</Typography>
                    <Typography variant="body2">This is a post content.</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Comment</Button>
                <Button size="small">Share</Button>
              </CardActions>
            </Card>
            {/* Add more post cards here */}
          </Grid>

          {/* Right Sidebar */}
          <Grid item md={3}>
            {/* Notifications */}
            <Card>
              <CardContent>
                <Typography variant="h6">Notifications</Typography>
                {/* Add notifications here */}
                <ul>
                  <li>
                    <Link href="#">New Notification 1</Link>
                  </li>
                  <li>
                    <Link href="#">New Notification 2</Link>
                  </li>
                  {/* Add more notifications */}
                </ul>
              </CardContent>
            </Card>

            <Divider mt={2} mb={2} />

            {/* Followers */}
            <Card>
              <CardContent>
                <Typography variant="h6">Followers</Typography>
                {/* Add followers here */}
                <ul>
                  <li>
                    <Link href="#">Follower 1</Link>
                  </li>
                  <li>
                    <Link href="#">Follower 2</Link>
                  </li>
                  {/* Add more followers */}
                </ul>
              </CardContent>
            </Card>

            {/* Add other sections to the right sidebar as needed */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
