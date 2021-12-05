import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <nav>
      <NavLink to="/register">Registration</NavLink>
      <NavLink style={{ marginLeft: '20px' }} to="/login">
        Login
      </NavLink>
    </nav>
  );
}
