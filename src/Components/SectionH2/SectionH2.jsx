import PropTypes from 'prop-types';
import s from './SectionH2.module.css';

export default function SectionH2({ title, children }) {
  return (
    <section>
      <h2 className={s.h2}>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

SectionH2.propTypes = {
  title: PropTypes.string,
};
