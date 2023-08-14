import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, IconButton } from '@mui/material';
import { ThumbUp, ChatBubbleOutline, Share } from '@mui/icons-material';

const PostContentCard = ({ title, description, author, authorAvatar, contentType, contentUrl }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <img src="../images/registration-image.jpg"></img>
        {contentType === 'image' && <img src={contentUrl} alt={title} style={{ width: '100%', marginBottom: 10 }} />}
        {contentType === 'video' && (
          <video controls style={{ width: '100%', marginBottom: 10 }}>
            <source src={contentUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <Typography variant="body1" gutterBottom>
          {description}
          <h3>we are the generation</h3>
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between" marginTop={2}>
          <Box display="flex" alignItems="center">
            <Avatar alt={author} src={authorAvatar} />
            <Typography variant="subtitle1" component="span" marginLeft={1}>
              {author}
              <h7>Samuel</h7>
            </Typography>
          </Box>
          <Box display="flex">
            <IconButton aria-label="Like">
              <ThumbUp />
            </IconButton>
            <IconButton aria-label="Comment">
              <ChatBubbleOutline />
            </IconButton>
            <IconButton aria-label="Share">
              <Share />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostContentCard;
