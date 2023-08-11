import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, TextField, Button, Typography, Link, Alert } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrect, setIncorrect] = useState(null);
  const navigate = useNavigate();

  const handleSummit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/login', { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === 'success') {
          navigate('/home');
        } else {
          setIncorrect('Incorrect password, please try again!');
        }
      })
      .catch((e) => console.log(e));
  };

  const handleCloseAlert = () => {
    setIncorrect(null);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          {incorrect && (
            <Alert severity="error" onClose={handleCloseAlert} sx={{ mb: 2 }}>
              {incorrect}
            </Alert>
          )}
          <form onSubmit={handleSummit}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            I don't have an account? <Link href="/register">Sign Up</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Login;
