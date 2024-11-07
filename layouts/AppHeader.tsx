import React from 'react';
import { uiConfig } from '../src/uiConfig';
import {
  Slide,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { HEADERHEIGHT } from '../src/types/enum';
import Box from '@mui/material/Box';
interface Props {
  children: React.ReactElement;
}
const AppHeader = () => {
  // 当向下滚动的时候对菜单栏进行隐藏
  const HideOnScroll = ({ children }: Props) => {
    const { breakpoints } = useTheme();
    console.log(breakpoints,'222')
    const md = useMediaQuery(breakpoints.down('md'));
    const trigger = useScrollTrigger({ threshold: md ? 160 : 80 });
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <HideOnScroll>
      <Box
        component="header"
        sx={(theme) => ({
          height: HEADERHEIGHT,
          position: 'sticky',
          top: 0,
          transition: theme.transitions.create('top'),
          zIndex: theme.zIndex.appBar,
          // bgcolor: '#1B2030',
          bgcolor: theme.palette.background.header,
          padding: {
            xs: '8px 20px',
            xsm: '8px 20px',
          },
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'space-between',
          boxShadow: 'inset 0px -1px 0px rgba(242, 243, 247, 0.16)',
        })}
      >
        <Box
          // component={Link}
          // href="/"
          // aria-label="Go to homepage"
          sx={{
            lineHeight: 0,
            mr: 3,
            transition: '0.3s ease all',
            '&:hover': { opacity: 0.7 },
          }}
          // onClick={() => setMobileMenuOpen(false)}
        >
          <img src={uiConfig.appLogo} alt="AAVE" width={72} height={20} />
        </Box>
      </Box>
    </HideOnScroll>
  );
};

export default AppHeader;
