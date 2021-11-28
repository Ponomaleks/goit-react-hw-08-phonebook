import PropTypes from 'prop-types';
import s from './InputName.module.css';

export default function InputName({ value, onChange }) {
  return (
    <label className={s.nameLabel}>
      Name
      <input
        className={s.inputField}
        onChange={onChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
      />
    </label>
  );
}

InputName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
