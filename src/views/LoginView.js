import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/auth-operations';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, sePassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return sePassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    sePassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input label="email" name="email" onChange={handleChange} value={email}></input>
      <input label="password" name="password" onChange={handleChange} value={password}></input>
      <button type="submit">Log in</button>
    </form>
  );
}
