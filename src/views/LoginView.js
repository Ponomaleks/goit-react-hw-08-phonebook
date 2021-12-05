import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/auth-operations';
import SectionH1 from '../Components/SectionH1';

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
    <SectionH1 title="Registration">
      <form onSubmit={handleSubmit} style={{ padding: '0 20px' }}>
        <label style={{ textAlign: 'left' }}>
          email <input label="email" name="email" onChange={handleChange} value={email} />
        </label>
        <label style={{ textAlign: 'left' }}>
          password
          <input
            label="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </SectionH1>
  );
}
