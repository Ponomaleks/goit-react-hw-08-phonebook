import PropTypes from 'prop-types';

export default function InputTel({ value, onChange }) {
  return (
    <label className="nameLabel">
      Number
      <input
        onChange={onChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={value}
      />
    </label>
  );
}
InputTel.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
