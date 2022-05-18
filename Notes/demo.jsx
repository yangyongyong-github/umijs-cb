
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children, history }) => {
  console.log('>>> children', children, '>>> history', history);
  /**
   * 跳到指定页面
   */
  const goTargetPage = (url) => {
    history.push(url);
  };

  return (
    <div>
      <h1>global base template</h1>
      <Link to="/charts">charts</Link>
      {/* history api */}
      <button onClick={() => goTargetPage('/user/123')}>user page</button>
      <button onClick={() => goTargetPage('/')}>home</button>
      <hr />
      {children}
    </div>
  );
};

export default Layout;
