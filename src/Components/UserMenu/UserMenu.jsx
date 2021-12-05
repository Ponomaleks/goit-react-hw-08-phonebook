import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import defaultAvatar from './avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={defaultAvatar} alt="UserPic" width="32" height="32"></img>
      <span style={{ marginLeft: '10px' }}>Hi,&nbsp;</span>
      <span>{name}</span>
      <button
        style={{ marginLeft: '10px' }}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut{' '}
      </button>
    </div>
  );
}
