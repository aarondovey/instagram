import React from 'react';
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="inner-header contents-wrapper">
          <div className="logo">{this.props.logoLabel}</div>
          <div className="account">{this.props.accountLabel}</div>
        </div>
      </div>
    )
  }
}

export default Header;
