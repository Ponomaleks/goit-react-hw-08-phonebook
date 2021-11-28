import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input name="filter" type="text" onChange={onChange} value={value} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
