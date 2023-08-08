import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';

const PostCreation = () => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(newFiles);
  };

  const handleSubmit = () => {
    console.log('Text:', text);
    console.log('Files:', files);
    // Reset form after submission
    setText('');
    setFiles([]);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Write something..."
              variant="outlined"
              value={text}
              onChange={handleTextChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*, video/*, audio/*, application/*"
              multiple
              onChange={handleFileChange}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Post
      </Button>
    </Card>
  );
};

export default PostCreation;
