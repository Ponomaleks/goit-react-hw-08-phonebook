import PropTypes from 'prop-types';

export default function ButtonDelete({ type, text, id, onClick }) {
  return (
    <button type={type} onClick={() => onClick(id)}>
      {text}
    </button>
  );
}

ButtonDelete.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
