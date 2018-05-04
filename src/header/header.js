import React from 'react';
import './header.css';

const Header = (props) => (
    <div className="header">
      <div className="inner-header contents-wrapper">
        <div className="logo">{props.logoLabel}</div>
        <div className="account">{props.accountLabel}</div>
      </div>
    </div>
  )
  
export default Header;
