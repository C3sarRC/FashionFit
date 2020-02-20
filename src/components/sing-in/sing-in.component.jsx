import React, {useState} from 'react';
import FormInput from '../../components/form-input/form-input';
import Button from '../../components/button/button.component';
import './sing-in.styles.scss';

const INITIAL_STATE = {
  email: '',
  password: ''
};

const SignIn = () => {
  const [form, setForm] = useState(INITIAL_STATE)

  function handleSubmit(e){
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form>
        <FormInput label="email" type="email" name="email" value={form.email} onChange={handleSubmit} />
        <FormInput label="password" type="password" name="password" value={form.password} onChange={handleSubmit} />
        <Button type="submit"> Sign In</Button>
      </form>
    </div>
  )
}

export default React.memo(SignIn);