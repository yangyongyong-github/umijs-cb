import React from 'react'
import LogoImageUrl from 'images/bk-logo.png';
import { Link } from 'react-router-dom';
import './style.scss'

const TopBanner = () => {
  return (
    <div className='top-banner-container'>
      <div className="left">
        <img className='logo' src={LogoImageUrl} alt="" />
      </div>
      <div className="middlee"></div>
      <div className="right">
        <div className="login-area">
          <Link to='./login'>点击登录</Link>
        </div>
      </div>
    </div>
  )
}

export default TopBanner