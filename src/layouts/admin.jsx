import React from 'react';
import './style/admin.scss';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import SideBar from '../components/content/SideBar';

const admin = ({ children }) => {
  return (
    <Layout className="container">
      <SideBar Sider={Sider} Menu={Menu}>
        <Layout>
          <Header>Header</Header>
          <Content>{children}</Content>
        </Layout>
      </SideBar>
    </Layout>
  );
};

export default admin;
