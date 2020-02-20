import React, {useState} from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './sing-in-sign-up.styles.scss';
import data from './shop.data';

const SignInSignUpPage = () => {
  const [collections, setCollections] = useState(data);
  return collections.slice(0, 4).map(collection => <CollectionPreview key={collection.id} items={collection.items} />);
}

export default React.memo(SignInSignUpPage);