import React from 'react';
import { selectLayout } from 'utils/selectLayout';

import '../styles/_global.scss';
import '../styles/_unified.scss';

import AdminLayout from './admin';
import LoginLayout from './login';
import NormalLayout from './normal';
import UserLayout from './user';

const Layout = ({ children, location }) => {
  const layoutMap = { AdminLayout, LoginLayout, UserLayout, NormalLayout };
  const Container = layoutMap[selectLayout(location.pathname)];

  return <Container>{children}</Container>;
};

export default Layout;
