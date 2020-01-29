import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, subtitle, size, imageUrl}) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{backgroundImage: `url(${imageUrl})`}}
        className={`background-image`}>
      </div>
      <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">{subtitle}</span>
        </div>
    </div>
  )
}

MenuItem.defaultProps = {
  title: '',
  subtitle: 'SHOP NOW'
}

export default MenuItem;