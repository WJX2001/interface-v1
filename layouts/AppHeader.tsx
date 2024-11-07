import React from 'react';
import { uiConfig } from '../src/uiConfig';
import {
  Box,
  Slide,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import { HEADERHEIGHT } from '../src/types/enum';
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
          bgcolor: theme.palette.background.header,
        })}
      >
        22222
      </Box>
    </HideOnScroll>
  );
};

export default AppHeader;
