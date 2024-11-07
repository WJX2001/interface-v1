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

const ConnectWalletPaper = ({
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
      <Box>
        <LandingGhost />
      </Box>
      <>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Typography variant="h2" sx={{ mb: 2, color: '#F1F1F3' } } >
              <>Please, connect your wallet</>
            </Typography>
            <Typography sx={{ mb: 6 ,color:'#A5A8B6'}}>
              {description || (
                <>
                  Please connect your wallet to see your supplies, borrowings,
                  and open positions.
                </>
              )}
            </Typography>
          </>
        )}
      </>
    </Paper>
  );
};

export default ConnectWalletPaper;
