import React from 'react';
import TopBanner from '../components/content/top-banner';

const user = ({ children }) => {
  return (
    <div>
      <TopBanner />
      {children}
    </div>
  );
};

export default user;
