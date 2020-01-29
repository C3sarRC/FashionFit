import React, {useState} from 'react';
import MenuItem from './menu-item.component';

const INITIAL_STATE = [
  {
    title: 'hats',
    imageUrl: 'https://images.unsplash.com/photo-1474039880361-1cd8259d95db?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://images.unsplash.com/photo-1501549686742-d8ecd80a26ec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'shoes',
    imageUrl: 'https://images.unsplash.com/photo-1457972899686-77aec5e247ce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=750&amp;q=80',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'accesories',
    imageUrl: 'https://images.unsplash.com/photo-1513237726167-2ae8ea985930?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=933&amp;q=80',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'jewlery',
    imageUrl: 'https://images.unsplash.com/photo-1518953789413-9598f0909795?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
];

const Directory = () => {
  const [sections, setSections] = useState(INITIAL_STATE);
  
  return (
    <div className="directory-menu">
      {sections && sections.map(menuItem => {
        return (
          <MenuItem key={menuItem.id} {...menuItem} />
        )
      })}
    </div>
  )
}

export default Directory;
