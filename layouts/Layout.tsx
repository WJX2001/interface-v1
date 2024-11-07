import React, { ReactNode } from 'react';
import AppHeader from './AppHeader';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AppHeader />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
