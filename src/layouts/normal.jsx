import React from 'react';
import TopBanner from '../components/content/top-banner';

export default function BaseLayout({ children }) {
  return (
    <>
      {/* <TopBanner /> */}
      {children}
    </>
  );
}
