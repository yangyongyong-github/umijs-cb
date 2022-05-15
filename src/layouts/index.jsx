import React from 'react';
import { selectLayout } from 'utils/selectLayout';

import '../styles/_global.scss';
import '../styles/_unified.scss';

import AdminLayout from './admin';
import LoginLayout from './login';
import NormalLayout from './normal';
import UserLayout from './user';

import './style/index.scss'


/**
 * 根据不同的路劲选择不同的Layout
 */
const Layout = ({ children, location }) => {
  const layoutMap = { AdminLayout, LoginLayout, UserLayout, NormalLayout };
  const Container = layoutMap[selectLayout(location.pathname)];
  console.log(children);
  return (
    <div className="layout-top">
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
