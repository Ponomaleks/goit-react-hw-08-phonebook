import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from './AuthNav';
import Navigation from './Navigation';

export default function AppBar() {
  return (
    <header
      style={{
        maxWidth: '800px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        color: 'black',
      }}
    >
      <Navigation />
      {useSelector(getIsLoggedIn) ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
