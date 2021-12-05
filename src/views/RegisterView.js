import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SectionH1 from '../Components/SectionH1';
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
    <SectionH1 title="Registration">
      <form onSubmit={handleSubmit} style={{ padding: '0 20px' }}>
        <label style={{ textAlign: 'left' }}>
          name
          <input label="name" name="name" onChange={handleChange} value={name} id="name" />
        </label>
        <label style={{ textAlign: 'left' }}>
          email
          <input label="email" name="email" onChange={handleChange} value={email} id="email" />
        </label>
        <label style={{ textAlign: 'left' }}>
          password
          <input
            label="password"
            name="password"
            onChange={handleChange}
            value={password}
            id="password"
            type="password"
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </SectionH1>
  );
}
