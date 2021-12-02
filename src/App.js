import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Appbar from './components/Appbar';
import { authOperations, authSelectors } from './redux/auth';
import s from './App.module.css';

const HomePage = lazy(() =>
  import(
    './views/HomePage'
    /* webpackChunkName: "home-page-view" */
  ),
);
const NoSuchPageView = lazy(() =>
  import(
    './views/NoSuchPageView'
    /* webpackChunkName: "no-page-view" */
  ),
);
const Registration = lazy(() =>
  import(
    './views/Registration'
    /* webpackChunkName: "registration-wiew" */
  ),
);
const Login = lazy(() =>
  import(
    './views/Login'
    /* webpackChunkName: "login-wiew" */
  ),
);
const ContactsWrapper = lazy(() =>
  import(
    './components/ContactsWrapper'
    /* webpackChunkName: "cotacts" */
  ),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <div className={s.container}>
        <Appbar />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/register" restricted>
              <Registration />
            </PublicRoute>

            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <Login />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsWrapper />
            </PrivateRoute>

            <Route component={NoSuchPageView} />
          </Switch>
        </Suspense>
      </div>
    )
  );
}

export default App;
