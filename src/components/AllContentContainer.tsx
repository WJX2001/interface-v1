import {
  Box,
  CircularProgress,
  Paper,
  PaperProps,
  Typography,
} from '@mui/material';
import React, { ReactNode } from 'react';
import LandingGhost from '/public/resting-gho-hat-purple.svg';
interface ConnectWalletPaperProps extends PaperProps {
  loading?: boolean;
  description?: ReactNode;
}

const AllContentContainer = ({
  loading,
  description,
  sx,
  ...rest
}: ConnectWalletPaperProps) => {
  return (
    <Paper
      {...rest}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 4,
        borderRadius:0,
        height:'100vh',
        flex: 1,
        background:'#1b2030',
        ...sx,
      }}
    >
      22223
    </Paper>
  );
};

export default AllContentContainer;
