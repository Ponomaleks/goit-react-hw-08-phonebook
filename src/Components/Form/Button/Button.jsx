import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ children, type, disabled }) {
  return (
    <button className={s.submitBtn} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
};
