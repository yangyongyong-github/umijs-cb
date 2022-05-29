import React from 'react';
import unImg from 'images/404.jpg';

const NotFoundPage = () => {
    return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <img src={unImg} alt="" />
        </div>
      );
}

export default NotFoundPage