import React from 'react';
import './homepage.styles.scss'

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="directory-menu">
        {/* menu-item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* menu-item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* menu-item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* menu-item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        {/* menu-item */}
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

