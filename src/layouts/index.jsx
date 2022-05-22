import React from 'react';
import { selectLayout } from 'utils/selectLayout';

import '../styles/_global.scss';
import '../styles/_unified.scss';
import './style/index.scss';

import AdminLayout from './admin';
import LoginLayout from './login';
import NormalLayout from './normal';
import UserLayout from './user';
import Loading from 'components/common/Loading';
import { useSelector } from 'umi';

// useSelector : hooks 的方式获取部分数据，dva 为 2.6.x 时有效。


/**
 * 根据不同的路劲选择不同的Layout
 */
const Layout = ({ children, history, location }) => {
  const layoutMap = { AdminLayout, LoginLayout, UserLayout, NormalLayout };
  const Container = layoutMap[selectLayout(location.pathname)];
  const loading = useSelector((state) => state.loading);

  return (
    <div className="layout-top">
      <Container>
        <Loading isShow={loading.effects['login']} />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
