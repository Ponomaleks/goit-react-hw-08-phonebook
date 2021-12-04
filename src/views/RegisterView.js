import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/auth-operations';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, sePassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    sePassword('');
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input label="name" name="name" onChange={handleChange} value={name} id="name" />
        </label>
        <label>
          email
          <input label="email" name="email" onChange={handleChange} value={email} id="email" />
        </label>
        <label>
          password
          <input
            label="password"
            name="password"
            onChange={handleChange}
            value={password}
            id="password"
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
