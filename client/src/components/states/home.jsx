import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import ResponsiveAppBar from '../cards/PrimarySearchAppBar';
import PostCreation from '../cards/PostCreation';
import PostContentCard from '../cards/PostCard';
import { Stack } from '@mui/material';
import ImageAvatars from '../cards/Avator';
import NotificationCard from '../cards/NotificationCard';


function Home() {
  return (
    <Stack direction="column" spacing={2}>
      <AppBar position="static">
        <stack><ResponsiveAppBar /></stack>
      </AppBar>

      {/* Main Content */}
      <Container mt={4}>
        <Grid container spacing={4}>
          {/* Left Sidebar */
          
          }
          <Grid item md={3}>
        

            <Card mt={4}>
            <Stack direction="column" spacing={2}>
            <ImageAvatars />
            <NotificationCard />
            </Stack>
                {/* Add trending posts here */}
            </Card>

            {/* Add other sections to the left sidebar as needed */}
          </Grid>

          {/* Main Feed */}
          <Grid item md={6}>
            {/* Post Creation Form */}
            <Stack direction="column" spacing={2}>
            <PostCreation />
            <PostContentCard />
            </Stack>
            
            {/* Post Cards */}
            
          </Grid>

          {/* Right Sidebar */}
          <Grid item md={3}>
            {/* Notifications */}
           
            <Divider mt={2} mb={2} />

            {/* Followers */}
          
            {/* Add other sections to the right sidebar as needed */}
            
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Home;
