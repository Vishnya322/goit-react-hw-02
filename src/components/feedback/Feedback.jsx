import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.choiceItemG}>Good: {feedback.good}</li>
      <li className={css.choiceItemN}>Neutral: {feedback.neutral}</li>
      <li className={css.choiceItemB}>Bad: {feedback.bad}</li>
      <li className={css.choiceItemT}>Total: {totalFeedback}</li>
      <li className={css.choiceItemP}>Positive: {positiveFeedback}</li>
    </ul>
  );
};

export default Feedback;
