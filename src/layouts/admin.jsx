import { React, useState } from 'react';
import { Layout, Menu } from 'antd';
import { history } from 'umi';

import SideBar from 'components/content/side-bar';
import CommonHeader from 'components/content/common-header';
import NotFoundPage from 'components/common/NotFoundPage';

import './style/admin.scss';
const { Header, Sider, Content } = Layout;

const admin = ({ children }) => {
  // 侧边栏是否折叠状态
  const [collaspe, setCollaspe] = useState(false);
  const { location } = history;
  const routeList = JSON.parse(sessionStorage.getItem('routeList'));

  /**
   * 定义一个当前页面的判断函数，判断当前界面是否在根域下，直接跳转到路由对象的首页面
   *  如果说当前访问的界面没有在路由表内部，直接跳转到404界面
   */
  const isIncludesPage = () => {
    if (location.pathname === '/') {
      history.replace(routeList[0].route);
      return false;
    }
    return routeList.some((item) => item.route === location.pathname);
  };

  // 改变侧边栏的宽度展示状态（收缩切换）
  const changeCollapse = () => setCollaspe(!collaspe);

  return (
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu} collaspe={collaspe}>
        {' '}
      </SideBar>
      <Layout>
        <CommonHeader
          Header={Header}
          collaspe={collaspe}
          changeCollapse={changeCollapse}
        />
        <Content>{isIncludesPage() ? children : <NotFoundPage />}</Content>
      </Layout>
    </Layout>
  );
};

export default admin;
