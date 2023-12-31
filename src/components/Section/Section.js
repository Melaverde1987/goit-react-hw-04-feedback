import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.card}>
    <h2>{title}</h2>
    {children}
  </section>
);
