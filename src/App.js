import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';
import './App.css';
import AppBar from './Components/Navigation/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import { authOperations } from './redux/auth/auth-operations';

// import ContactsView from './views/ContactsView';
// import HomeView from './views/HomeView';
// import LoginView from './views/LoginView';
// import RegisterView from './views/RegisterView';

const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "HomeView" */));
const LoginView = lazy(() => import('./views/LoginView' /* webpackChunkName: "LoginView" */));
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "RegisterView" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
          {/* <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute> */}
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Suspense>
    </>
  );
}
