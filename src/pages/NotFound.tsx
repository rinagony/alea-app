import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
}

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Container
      sx={containerStyles}
    >
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100, color: '#DDA0DD', mb: 2 }} />
      <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#333' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '1.5rem', color: '#555', mb: 4 }}>
        WOWWW! The page youre looking for doesnt exist.
      </Typography>
      <Button variant="outlined" color="secondary" onClick={handleGoBack} sx={{ mt: 3 }}>
        Go back hpme
      </Button>
    </Container>
  );
};

export default NotFound;