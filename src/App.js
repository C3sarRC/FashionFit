import React, {useState} from 'react';
import HomePage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import Header from 'components/header/header.component';
import SignInSignUpPage from 'pages/sign-in-sign-up/sign-in-sign-up.component';
import {Switch, Route} from 'react-router-dom';
import useFirebaseUser from 'hooks/use-firebase-user.hook';

import './App.css';

function App() {

  const user = useFirebaseUser();

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
