import React, {useState} from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './homepage.styles.scss';
import data from './shop.data';

const ShopPage = () => {
  const [collections, setCollections] = useState(data);
  return collections.slice(0, 4).map(collection => <CollectionPreview key={collection.id} items={collection.items} />);
}

export default ShopPage;