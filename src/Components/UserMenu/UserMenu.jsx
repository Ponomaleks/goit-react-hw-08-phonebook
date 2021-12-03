import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import defaultAvatar from './avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <>
      <img src={defaultAvatar} alt="UserPic" width="32" height="32"></img>
      <span>Hi, </span>
      <span>{name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut{' '}
      </button>
    </>
  );
}
