import { useState, useEffect } from 'react';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description';
import css from './App.module.css';

const reviewsState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getSavedFeedback = () => {
  const savedFeedback = window.localStorage.getItem('feedback');
  return savedFeedback !== null ? JSON.parse(savedFeedback) : reviewsState;
};

const App = () => {
  const [feedback, setFeedback] = useState(getSavedFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(startFeedback => ({
      ...startFeedback,
      [feedbackType]: startFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) +
    '%';

  const resetFeedback = () => {
    setFeedback(reviewsState);
  };

  return (
    <div className={css.appContainer}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
