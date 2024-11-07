import {
  Button,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { navigation } from '../../src/ui-config/menu-items';
import { Link } from '../../src/components/primitives/Link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
const NavItems = () => {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down('md'));
  const router = useRouter();

  return (
    <List
      sx={{
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
      disablePadding
    >
      {navigation.map((item, index) => (
        <ListItem
          sx={{
            width: { xs: '100%', md: 'unset' },
            mr: { xs: 0, md: 2 },
          }}
          disablePadding
          key={index}
        >
          {md ? (
            <Typography
              component={Link}
              href={item.link}
              variant="h2"
              color="#F1F1F3"
              sx={{ width: '100%', p: 4 }}
              // onClick={() => handleClick(item.title, true)}
            >
              {item.title}
            </Typography>
          ) : (
            <Button
              // component={Link}
              // onClick={() => handleClick(item.title, false)}
              href={item.link}
              // @ts-ignore
              className={{
                active: router.pathname === item.link,
              }}
              sx={(theme) => ({
                color: '#F1F1F3',
                p: '6px 8px',
                ':active': {},
                position: 'relative',
                '.active&:after, &:hover&:after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'bottom left',
                },
                '&:after': {
                  content: "''",
                  position: 'absolute',
                  width: '100%',
                  transform: 'scaleX(0)',
                  height: '2px',
                  bottom: '-6px',
                  left: '0',
                  background: theme.palette.gradients.aaveGradient,
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.25s ease-out',
                },
              })}
            >
              {item.title}
            </Button>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
