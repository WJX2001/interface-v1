import { ROUTES } from '../../components/primitives/Link';

interface Navigation {
  link: string;
  title: string;
}
export const navigation: Navigation[] = [
  {
    link: ROUTES.SWAP,
    title: 'SWAP',
  },
  {
    link: ROUTES.LIQUIDITY,
    title: 'LIQUIDITY',
  },
  {
    link: ROUTES.INDEX,
    title: 'INDEX',
  },
];
