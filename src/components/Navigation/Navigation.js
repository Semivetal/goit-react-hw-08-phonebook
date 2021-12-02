import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import s from '../../component-styles/NavLink.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <NavLink
        to="/"
        exact
        className={s.navLink}
        activeClassName={s.navActiveLink}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={s.navLink}
          activeClassName={s.navActiveLink}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
