import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <ul className={css.btnRow}>
      <button className={css.btnNameG} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button
        className={css.btnNameN}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={css.btnNameB} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button className={css.btnNameR} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </ul>
  );
};

export default Options;
