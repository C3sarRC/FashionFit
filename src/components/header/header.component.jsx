import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/crown.svg';
import {auth} from '../../utils/firebase.utils';

const Header = (user) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="logo-container" to="/shop">
          SHOP
        </Link>
        <Link className="logo-container" to="/contact">
          CONTACT
        </Link>
        {
          user ?
          <div className="option" onClick={auth.signOut}>SIGN OUT</div>
          : <Link className="option" to="/signin">SIGN IN</Link>
        }
      </div>
    </div>
  )
}

export default React.memo(Header);
