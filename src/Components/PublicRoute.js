import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import { Navigate } from 'react-router';

export default function PublicRoute({ children }, restricted = false, ...routeProps) {
  const isLoggesIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggesIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
}
