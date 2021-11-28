import PropTypes from 'prop-types';
import s from './SectionH1.module.css';

export default function SectionH1({ title, children }) {
  return (
    <section>
      <h1 className={s.h1}>{title}</h1>
      <div>{children}</div>
    </section>
  );
}

SectionH1.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
