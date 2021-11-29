import { NavLink } from 'react-router-dom';

export default function HomeView() {
  return (
    <nav>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/register">Registration</NavLink>
    </nav>
  );
}
