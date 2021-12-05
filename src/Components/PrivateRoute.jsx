import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
}
