import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import CollectionItem from 'components/collection-item/collection-item.component';

import './menu-item.styles.scss';

const CollectionPreview = ({title, items}) => {

  return (
    <div className={'collection-preview'}>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="content">
       {items.map(item => <CollectionItem key={item.id} {...item} />)}
      </div>
    </div>
  )
}

CollectionPreview.defaultProps = {
  title: '',
  items: []
}

export default React.memo(CollectionPreview);