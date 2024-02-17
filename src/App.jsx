import { useState, useEffect } from 'react';
import Options from './components/options/options';
import Feedback from './components/feedback/feedback';
import Notification from './components/notification/notification';
import Description from './components/description/Description';
import css from './App.module.css';

//object стану відгуків за замовченням
const featuresState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

//ф-ція що зчитує значення localStorage за ключем
const getInitialFeedback = () => {
  const storedFeedback = window.localStorage.getItem('feedback');
  return storedFeedback !== null ? JSON.parse(storedFeedback) : featuresState;
};

const App = () => {
  // зміна початкового значення стану
  const [feedback, setFeedback] = useState(getInitialFeedback);

  // async ф-ція збереження даних у локальному сховищі
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  //ф-ція зміни стану відгуків
  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Загальна кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Підрахунок відсотка позитивних відгуків
  const positiveFeedback =
    Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) +
    '%';

  // Функція скидання відгуків
  const resetFeedback = () => {
    setFeedback(featuresState);
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
