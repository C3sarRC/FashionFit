import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, subtitle, size, imageUrl, linkUrl}) => {
  let history = useHistory();
  let location = useLocation();
  function handleNavigation(){
    history.push(`${location.pathname}${linkUrl}`);
  }
  
  return (
    <div className={`${size} menu-item`} onClick={handleNavigation}>
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

export default React.memo(MenuItem);