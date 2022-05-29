import React from 'react';
import iconMap from 'components/common/IconMap';
import { Avatar, Menu } from 'antd';
import { useSelector } from 'umi';
const { SubMenu, Divider, Item } = Menu;
import avatarDefaultImg from 'images/avatar_default.png';

const CommonHeader = ({ Header, collapse, changeCollapse }) => {

  const { userInfo } = useSelector(state => state.userLogin);

  const MenuTitle = (
    <>
      <span>{userInfo.userName}</span>
      <Avatar
        style={{ marginLeft: 0 }}
        src={userInfo.avatar || avatarDefaultImg}
      />
    </>
  );
console.log(collapse);
  // 用户点击退出按钮
  const signOut = () => {
    sessionStorage.clear();
    window.location.href = '/login';
  };

  return (
    <Header className="header-wrapper">
      <div className="button" onClick={changeCollapse}>
        {collapse ? iconMap.rightArrow : iconMap.leftArrow}
      </div>
      <Menu mode="horizontal">
        <SubMenu key={['1']} title={MenuTitle}>
          <Divider />
          <Item key="4" icon={iconMap.signOut} onClick={signOut}>
            <span>退出</span>
          </Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default CommonHeader;
