import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.jpeg';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.userWrapper}>
      <img src={defaultAvatar} alt="user" className={s.userImg} />
      <p className={s.userWelcome}>Welcome, {name}</p>
      <button
        className={s.logOutBtn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
