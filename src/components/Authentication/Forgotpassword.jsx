import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from '../../firebaseconfig'; // Import auth from firebaseconfig
import { sendPasswordResetEmail } from 'firebase/auth';
import './ForgotPassword.css'; // Import the CSS file

const theme = createTheme();

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent.');
    } catch (error) {
      setMessage('Error sending password reset email.');
      console.error('Error sending password reset email:', error.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: '#1976d2', mb: 2 }}>
              Forgot Password
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#1976d2', color: '#fff' }}
              >
                Send Password Reset Email
              </Button>
              {message && <Typography variant="body2" sx={{ color: '#d32f2f' }}>{message}</Typography>}
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default ForgotPassword;
