import { useSelector } from 'react-redux';
import { isLoggedIn } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';

export default function AppBar() {
  // const isLoggedIn = useSelector(isLoggedIn);

  return (
    <header>
      <Navigation />
      {useSelector(isLoggedIn) ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
