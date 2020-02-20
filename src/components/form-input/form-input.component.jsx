import React from 'react';
import './sing-in.styles.scss';


const FormInput = ({onChange, label, ...props}) => {
  return (
    <div className="group">
      <input {...props} onChange={onChange} />
      {(label || undefined) && (
        <label className={`form-input-value ${props.value ? 'shrink' : ''}`} for={props.name}></label>
      )}
    </div>
  )
}

export default React.memo(FormInput);