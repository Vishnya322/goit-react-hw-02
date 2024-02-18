import css from './Description.module.css';

const Description = () => {
  return (
    <div className={css.topForm}>
      <h1 className={css.nameCafe}>Sip Happens Café</h1>
      <p className={css.textReference}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
