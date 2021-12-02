import { NavLink } from 'react-router-dom';
import s from '../../component-styles/NavLink.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      className={s.navLink}
      activeClassName={s.navActiveLink}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={s.navLink}
      activeClassName={s.navActiveLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
