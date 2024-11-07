import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import AppHeader from './AppHeader';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppHeader />
      <Box
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
