import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';

export default function AppBar() {
  return (
    <header>
      <Navigation />
      {useSelector(getIsLoggedIn) ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
