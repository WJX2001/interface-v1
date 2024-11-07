import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        // backgroundImage: 'linear-gradient(to right, #17081E, #282b30)',
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        width={'100%'}
      >
        <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>
          Welcome to MoDex
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
