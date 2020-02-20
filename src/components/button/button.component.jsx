import React from 'react';
import './sing-in.styles.scss';


const Button = ({children, isGoogleSignIn, ...props}) => {
  return (
    <button {...props} className={`${isGoogleSignIn? 'google-sign-in' : ''} custom-button`}>{children}</button>
  )
}

export default React.memo(Button);