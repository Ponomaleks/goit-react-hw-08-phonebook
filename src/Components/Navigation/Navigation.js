import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function Navigation() {
  return (
    <nav>
      {useSelector(getIsLoggedIn) ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <NavLink to="/">Home</NavLink>
      )}
    </nav>
  );
}
