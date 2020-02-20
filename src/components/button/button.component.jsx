import React from 'react';
import './sing-in.styles.scss';


const Button = ({children, ...props}) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default React.memo(Button);